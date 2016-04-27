import {User} from "./User.sol";
import {Participant} from "./Participant.sol";
import {ParticipantAuthority} from "./ParticipantAuthority.sol";

contract Certificate {

	address public owner;

	enum State {
		/*
		Pending: certificate has been created, but awaiting signatures from issuer and either importer or exporter
		Issued: all signatures received, certificate is valid.
		Completed: shipment validated upon border crossing
		Expired: shipment has expired without receiving a 'completed' Event
		*/
		Pending, Issued, Expired
	}
	State private state = State.Pending;

	struct Dates {
		//date the certificate is created + requested
		uint creation;

		//date the certificate is signed by all parties and is officially issued, becoming valid
		uint issue;

		//date the shipment is certified by the importing authority
		uint completion;

		//default expiration date of the certificate, exercised only if shipment never verified by importing authority
		uint expiration;
	}
	Dates public dates = Dates(now, 0, 0, 0);

	//Participants in the KP: member countries of source and destination
	struct Participants {
		address[] origins; //the declared origin of the goods
		address source; //the country we are exporting from
		address destination; //the country we are importing to
	}
	Participants private participants;

	//Authorities: issuing and importing
	struct Agents {
		address exporter;
		address importer;
	}
	Agents public agents;

	//the parties to the transaction: importer and exporter
	struct Parties {
		address exporter;
		address importer;
	}
	Parties public parties;

    struct Signature {
        uint date;
        address owner;
    }

    struct Signatures {
        Signature exporter;
        Signature importer;
        Signature exporterAuthority;
        Signature importerAuthority;
    }
    Signatures private signatures;

	struct Parsel {
		string carats;
		string value;
		address[] origins;
	}
	Parsel[] public parsels;

	event Requested(address indexed certificate);
	event Issued(address indexed certificate);
	event Expired(address indexed certificate);
	event Exported(address indexed certificate);
	event Imported(address indexed certificate);
    event Signed(address from, string name);

    uint public numberOfSignatures;

	/*
	Certificates should be created by the exporter: the party in possession of the goods.
	params:
	- importer - importing Party
	- exporter - exporting Party
	- participantOrigin - KPCS Participant (member country) the goods were sourced _from_ ... likely the country of geological origin
	- participantSource - KPCS Participant (member country) the goods are being sent from
	- participantDestination - KPCS Participant (member country) the goods are being sent to
	*/
    function Certificate(address _exporter,
    	address _importer,
    	address[] _participantOrigin,
    	address _participantSource,
    	address _participantDestination) {
    		owner = msg.sender;
    		parties = Parties(_exporter, _importer);
    		participants = Participants(_participantOrigin, _participantSource, _participantDestination);
    		owner = msg.sender;
            signatures = Signatures(
                Signature(now, _exporter),
                Signature(0,0x0),
                Signature(0,0x0),
                Signature(0,0x0));
            numberOfSignatures = 1;
    }

    function getNumberOfParticipantsOrigins() public constant returns (uint) {
        return participants.origins.length;
    }

    function getParticipantOriginWithIndex(uint index) public constant returns (address) {
        return participants.origins[index];
    }

    function getParticipantSource() public constant returns (address) {
        return participants.source;
    }

    function getParticipantDestination() public constant returns (address) {
        return participants.destination;
    }

    function getParticipants() public constant returns (address[]) {
        address[] memory allParticipants = new address[](participants.origins.length + 2);
        allParticipants[0] = (participants.source);
        allParticipants[1] = participants.destination;
        uint origins = participants.origins.length;
        for(uint i = 0; i<origins; i++) {
            allParticipants[i + 2] = participants.origins[i];
        }
        return allParticipants;
    }

    function addParsel(string carats, string value, address[] origins) returns (bool) {
    	if(msg.sender != owner) {
    		return false;
    	}
    	parsels.push(Parsel(carats, value, origins));
    	return true;
    }

    function getImportingParty() public returns (address) {
        return User(parties.importer);
    }

    function getExportingParty() public returns (address) {
        return User(parties.exporter);
    }    

    function getSignatures() public returns (uint[4]) {
        return [signatures.exporter.date,
            signatures.importer.date, 
            signatures.exporterAuthority.date,
            signatures.importerAuthority.date
        ];
    }

    function canSign() public returns (bool) {
        if(ParticipantAuthority(Participant(participants.source).getExportingAuthority()).isSenderRegisteredAgent(msg.sender)) {
            if(signatures.exporterAuthority.date > 0) {
                return false;
            }
            return true;
        } else if(ParticipantAuthority(Participant(participants.destination).getImportingAuthority()).isSenderRegisteredAgent(msg.sender)) {
            if(signatures.importerAuthority.date > 0) {
                return false;
            }
            return true;
        } else if(msg.sender == User(parties.importer).owner()) {
            if(signatures.importer.date > 0) {
                return false;
            }
            return true;
        }
        return false;
    }

    function sign() returns (bool) {
        if(ParticipantAuthority(Participant(participants.source).getExportingAuthority()).isSenderRegisteredAgent(msg.sender)) {
            if(signatures.exporterAuthority.date > 0) {
                return false;
            }
            Signed(msg.sender, "Exporting Authority");
            signatures.exporterAuthority = Signature(now, msg.sender);
        } else if(ParticipantAuthority(Participant(participants.destination).getImportingAuthority()).isSenderRegisteredAgent(msg.sender)) {
            if(signatures.importerAuthority.date > 0) {
                return false;
            }
            Signed(msg.sender, "Importing Authority");
            signatures.importerAuthority = Signature(now, msg.sender);
        } else if(msg.sender == User(parties.importer).owner()) {
            if(signatures.importer.date > 0) {
                return false;
            }
            Signed(msg.sender, "Importing Party");
            signatures.importer = Signature(now, msg.sender);
        } else {
            return false;
        }

        numberOfSignatures++;

        if(hasRequiredSignatures()) {
            state = State.Issued;
            Issued(this);
        }
        return true;
    }

    function hasRequiredSignatures() returns (bool isComplete) {
        return (signatures.importerAuthority.date > 0 && signatures.exporterAuthority.date > 0 && signatures.importer.date > 0 && signatures.exporter.date > 0);
    }

    function isValid() returns (bool) {
    	return (state == State.Issued);
    }
}
