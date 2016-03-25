import User from "./User"
import Certificate from "./Certificate"

contract ParticipantAgent is Administrator {
	/*
		Agents can:
		- create Parties
		- sign certificates
	*/
	
	string public name;
	address public authority;
	address public owner;
	uint public dateCreated = now;

	function ParticipantAgent(string _name, address _authority) {
		owner = msg.sender;
		authority = _authority;
		name = _name;
	}

	function signCertificate(address _certificate) (returns bool) {
		if(msg.sender != owner) {
			return false
		}
		Certificate(_certificate).sign()
	}
}
