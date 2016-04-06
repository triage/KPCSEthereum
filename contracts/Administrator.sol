import {User} from "./User.sol";

contract Administrator is User("name", 0x0, 1) {
	/*
		Authorities can:
		- create Issuers
		- create Participants
		- change state of Participants
		- change state of Certifiates
	*/

	address public owner;
	string public name;

	function Administrator(string _name, address _administrator, uint _role) {
		name = _name;
		owner = msg.sender;
		administrator = _administrator;
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

	function kill() {
		if (msg.sender == owner) suicide(owner);
	}
}
