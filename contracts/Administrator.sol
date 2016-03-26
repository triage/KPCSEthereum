import {User} from "./User.sol";

contract Administrator {
	/*
		Authorities can:
		- create Issuers
		- create Participants
		- change state of Participants
		- change state of Certifiates
	*/

	address public owner;
	string public name;

	function Administrator(string _name) {
		name = _name;
		owner = msg.sender;
	}

	function acceptUser(address applicant) returns (bool) {
		if(msg.sender != owner) {
			return false;
		}
		User(applicant).accept();
	}

	function rejectUser(address user) returns (bool) {
		if(msg.sender != owner) {
			return false;
		}
		User(user).reject();
	}

	function suspendUser(address user) returns (bool) {
		if(msg.sender != owner) {
			return false;
		}
		User(user).suspend();
	}

	function expelUser(address user) returns (bool) {
		if(msg.sender != owner) {
			return false;
		}
		User(user).expel();
	}

	// function participantCreate() return (address) {
	// 	if(super.state == State.Applied || msg.sender != super.owner)  {
	// 		return 0x0
	// 	}
	// 	return Participant()
	// }

	// function issuerCreate() return (address) {
	// 	if(super.state == State.Applied || msg.sender != super.owner)  {
	// 		return 0x0
	// 	}
	// 	return Issuer()
	// }

	// function agentCreate() {
		
	// }
}
