import {User} from "./User.sol";
import {Participant} from "./Participant.sol";

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
	State public state = State.Pending;

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
	Participants participants;

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

	struct Signatures {
		uint exporter;
		uint importer;
		uint importerAuthority;
		uint exporterAuthority;
	}
	Signatures public signatures;

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
    		signatures = Signatures(now, 0, 0, 0);
    }

    function addParsel(string carats, string value, address[] origins) returns (bool) {
    	if(msg.sender != owner) {
    		return false;
    	}
    	parsels.push(Parsel(carats, value, origins));
    	return true;
    }

    function getExportingPartyOwner() public returns (address) {
    	return User(parties.exporter).owner();
    }

    function sign() returns (bool) {
    	if(Participant(participants.source).isValidExportingAgent(msg.sender)) {
    		if(signatures.exporterAuthority > 0) {
    			return false;
    		}
    		signatures.exporterAuthority = 111111;
    	} else if(Participant(participants.source).isValidImportingAgent(msg.sender)) {
    		if(signatures.importerAuthority > 0) {
    			return false;
    		}
    		signatures.importerAuthority = 222222;
    	} else if(msg.sender == User(parties.importer).owner()) {
    		if(signatures.importer > 0) {
    			return false;
    		}
    		signatures.importer = 333333;
    	} else {
    		return false;
    	}

    	if(hasRequiredSignatures()) {
    		state = State.Issued;
    		Issued(this);
    	}
    	return true;
    }

    function hasRequiredSignatures() returns (bool isComplete) {
    	return (signatures.importerAuthority > 0 && signatures.exporterAuthority > 0 && signatures.importer > 0 && signatures.exporter > 0);
    }

    function isValid() returns (bool) {
    	return (state == State.Issued);
    }
}
