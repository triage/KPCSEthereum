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
	struct Authorities {
		address exporter;
		address importer;
	}
	Authorities public authorities;

	//the parties to the transaction: importer and exporter
	struct Parties {
		address exporter;
		address importer;
	}
	Parties parties;

	struct Signatures {
		uint importer;
		uint exporter;
		uint exporterAuthority;
		uint importerAuthority;
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
    function Certificate(address _importer, address _exporter, address[] _participantOrigin, address _participantSource, address _participantDestination) {
    	owner = msg.sender;
    	parties = Parties(_importer, _exporter);
    	participants = Participants(_participantOrigin, _participantSource, _participantDestination);
    	owner = msg.sender;
    	signatures = Signatures(now, 0, 0, 0);
    }

    function sign() returns (bool) {
    	if(msg.sender == authorities.exporter) {
    		if(signatures.exporterAuthority > 0) {
    			return false;
    		}
    		signatures.exporterAuthority = now;
    	} else if(msg.sender == authorities.importer) {
    		if(signatures.importerAuthority > 0) {
    			return false;
    		}
    		signatures.importerAuthority = now;
    	} else if(msg.sender == parties.importer) {
    		if(signatures.importer > 0) {
    			return false;
    		}
    		signatures.importer = now;
    	} else {
    		throw;
    	}

    	if(hasRequiredSignatures()) {
    		state = State.Issued;
    		Issued(this);
    	} else {
    		return true;
    	}
    }

    function hasRequiredSignatures() returns (bool isComplete) {
    	return (signatures.importerAuthority > 0 && signatures.exporterAuthority > 0 && signatures.importer > 0 && signatures.exporter > 0);
    }

    function isValid() returns (bool) {
    	return (state == State.Issued);
    }
}
