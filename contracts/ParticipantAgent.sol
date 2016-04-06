import {User} from "./User.sol";
import {Administrator} from "./Administrator.sol";
import {Certificate} from "./Certificate.sol";

contract ParticipantAgent is Administrator("name", 0x0) {
	/*
		ParticipantAgents are entities delegated by Participants
		(e.g. the Minister of Mines and Mining) the power to
		issue certificates.

		These individuals can act on behalf of the Particiapnt to:
		1. sign certificates
		2. managed Party entities

	*/
	
	string public name;
	uint public dateCreated = now;
	Administrator public administrator;

	function ParticipantAgent(string _name, address _administrator) {
		owner = msg.sender;
		administrator = Administrator(_administrator);
		name = _name;
	}

	function signCertificate(address _certificate) returns (bool) {
		//reject anyone that's not the owner
		if(msg.sender != owner) {
			return false;
		}
		//if the user is in a state other than approved
		// if(User(msg.sender).state != State.Accepted) {
		// 	return false;
		// }

		Certificate(_certificate).sign();
		return true;
	}
}
