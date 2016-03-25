import Certificate from "./Certificate"
import Issuer from "./Issuer"
import Party from "./Party"
import Participant from "./Participant"
import Administrator from "./Administrator"

contract KPCS {

	//Administrators
	address public owner;

	mapping(address: => Administrator) public administrators

	//Issuers of certificates. Entities, not individuals
	mapping(address: => Issuer) public issuers

	//Parties to a contract. Importer/exporter
	mapping(address: => Party) public parties

	//all certificates
	mapping(address: => Certificate) public certificates

	//member countries
	mapping(address: => Participant) public participants

	function KPCS() {
		authorities[msg.sender] = Authority();
		owner = msg.sender;
	}
}
