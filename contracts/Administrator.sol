import Agent from "./Agent";
import User from "./User"

contract Administrator is User {
	/*
		Authorities can:
		- create Issuers
		- create Participants
		- change state of Participants
		- change state of Certifiates
	*/

	mapping(address => Agent) public agents;

	function acceptUser(address applicant) returns (bool) {
		if(msg.sender != super.owner) {
			return false
		}
		User(applicant).accept();
	}

	function rejectUser(address user) returns (bool) {
		if(msg.sender != super.owner) {
			return false
		}
		User(user).reject();
	}

	function suspendUser(address user) returns (bool) {
		if(msg.sender != super.owner) {
			return false
		}
		User(user).suspend();
	}

	function expelUser(address user) returns (bool) {
		if(msg.sender != super.owner) {
			return false
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
