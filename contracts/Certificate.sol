import * as Participant from "./Participant";
import * as Issuer from "./Issuser";
import * as Parsel from "./Parsel";
import * as Authority from "./Authority";

contract Certificate {

	address _certificateAddress;

	enum State {
		/*
		Pending: certificate has been created, but awaiting signatures from issuer and either importer or exporter
		Issued: all signatures received, certificate is valid.
		Completed: shipment validated upon border crossing
		Expired: shipment has expired without receiving a 'completed' Event
		*/
		Pending, Issued, Expired
	}
	State state = State.Pending;

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
	dates Dates = Dates(now, 0, 0, 0)

	//Participants in the KP: member countries of source and destination
	struct Participants {
		mapping(address => Participant) public origin;
		mapping(address => Participant) public source;
		mapping(address => Participant) public destination;
	}
	Participants participants;

	//Authorities: issuing and importing
	struct Authorities {
		mapping(address => Issuer) public issuing;
		mapping(address => TransitAuthority) public exporting;
		mapping(address => TransitAuthority) public importing;
	}
	public Authorities authorities;

	//the parties to the transaction: importer and exporter
	struct Parties {
		mapping(address => Party) public exporter;
		mapping(address => Party) public importer;
	}
	Parties parties;

	mapping(address => Parsel) parsels;

	struct Signatures {
		public uint issuer;
		public uint exporter;
		public uint importer;
		public uint importingAuthority;
		public uint exportingAuthority;
	}
	const uint8 signaturesRequiredToValidate = 3;

	event Requested(Certificate certificate);
	event Issued(Certificate certificate);
	event Expired(Certificate certificate);
	event Exported(Certificate certificate);
	event Imported(Certificate certificate);

    function Certificate(address _importer, address _exporter, address _destination, mapping(address => Parsel) _parsels) {
    	issuer = msg.sender;
    	importer = _importer;
    	exporter = _exporter;
    	destination = _destination;
    	parsels = _parsels;
    	signatureCount = 0;
    	_certificateAddress = msg.sender;

    }

    function create() {
    	signatureCount = 0;
    }

    function sign(address signer) {
    	signatureCount++;
    	if(signatureCount == signaturesRequired) {
    		state = State.Issued;
    	}
    }

    function issue() returns (bool) {
    	if (msg.sender != issuer) {
    		throw;
    	}

    	Issue(issuer, importer, exporter, destination, parsels)
    	return true
    }

    function isValid returns (bool) {
    	return true
    }
}


