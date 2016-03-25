import * as Participant from "./Participant";
import * as Issuer from "./Issuser";
import * as Parsel from "./Parsel";
import * as Authority from "./Authority";
import * as Owned from "./Owned"

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
		uint public creation;

		//date the certificate is signed by all parties and is officially issued, becoming valid
		uint public issue;

		//date the shipment is certified by the importing authority
		uint public completion;

		//default expiration date of the certificate, exercised only if shipment never verified by importing authority
		uint public expiration;
	}
	Dates public dates = Dates(now, 0, 0, 0)

	//Participants in the KP: member countries of source and destination
	struct Participants {
		address public origin; //the declared origin of the goods
		address public source; //the country we are exporting from
		address public destination; //the country we are importing to
	}
	Participants participants;

	//Authorities: issuing and importing
	struct Authorities {
		address public exporter;
		address public importer;
	}
	Authorities public authorities;

	//the parties to the transaction: importer and exporter
	struct Parties {
		address public exporter;
		address public importer;
	}
	Parties parties;

	mapping(address => Parsel) public parsels;

	struct Signatures {
		bool public exportingAuthority;
		bool public importingAuthority;
	}
	Signatures public signatures;

	event Requested(Certificate certificate);
	event Issued(Certificate certificate);
	event Expired(Certificate certificate);
	event Exported(Certificate certificate);
	event Imported(Certificate certificate);

	/*
	Certificates should be created by the exporter: the party in possession of the goods.
	params:
	- importer - importing Party
	- exporter - exporting Party
	- participantOrigin - KPCS Participant (member country) the goods were sourced _from_ ... likely the country of geological origin
	- participantSource - KPCS Participant (member country) the goods are being sent from, which has a relatinoship to an Issuer
	- participantDestination - KPCS Participant (member country) the goods are being sent to, which has a relationship to an Issuer.
	*/
    function Certificate(address _importer, address _exporter, address _participantOrigin, address _participantSource, address _participantDestination, mapping(address => Parsel) _parsels) {
    	owner = msg.sender;
    	parties = Parties(_importer, _exporter);
    	participants = Participants(_participantOrigin, _participantSource, _participantDestination);
    	parsels = _parsels;
    	owner = msg.sender;
    	signatures = Signatures(false, false);
    }

    function sign() returns (bool signed) {
    	if(msg.sender == authorities.issuer) {
    		if(signatures.issuer == false) {
    			return false;
    		}
    		signatures.issuer = true;
    	} else if(msg.sender == authorities.exporter) {
    		if(signatures.exporter == false) {
    			return false;
    		}
    		signatures.exporter = true;
    	} else if(msg.sender == authorities.importer) {
    		if(signatures.importer == false) {
    			return false;
    		}
    		signatures.importer = true;
    	} else {
    		throw;
    	}

    	if(hasRequiredSignatures()) {
    		state = State.Issued;
    		issue();
    	} else {
    		return true;
    	}
    }

    function hasRequiredSignatures() returns (bool isComplete) {
    	return (signatures.importingAuthority == true && signatures.exportingAuthority == true);
    }

    function isValid returns (bool) {
    	return (state == State.Issued);
    }
}


