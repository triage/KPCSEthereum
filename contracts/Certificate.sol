import * as Participant from "./Participant";
import * as Issuer from "./Issuser";
import * as Parsel from "./Parsel";

contract Certificate {
	struct Date {
		uint16 year
		uint8 month
		uint8 day
	}

	Participant issuer;
	Participant importer;
	Participant exporter;
	string destination;
	mapping(address => Parsel) parsels;

	event Issue(address issuer, address importer, address exporter, address destination, parsels);
	event Expire()

    // - issue -> cert
    //     - importer (participant)
    //     - exporter (participant)
    //     - origin country
    //     - destination country
    //     - number of parcels
    //     - date
    // - expire (acknowledge receipt) -> Bool
    // - validate -> Bool

    function Certificate(address _importer, address _exporter, address _destination, mapping(address => Parsel) _parsels) {
    	issuer = msg.sender;
    	importer = _importer;
    	exporter = _exporter;
    	destination = _destination;
    	parsels = _parsels;
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


