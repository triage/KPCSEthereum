import {UserType} from "./UserType.sol";
import {UserState} from "./UserState.sol";

contract User {
	enum State {
		Applied, Accepted, Rejected, Suspended, Expelled
	}
	State public state;

	enum Role {
		KPCSAdministrator, Administrator, Participant, ParticipantAgent, ParticipantAuthority, Party
	}
	Role public role;

	event UserStateChanged(address user, State state, Role role, address administrator);

    address public owner = msg.sender;
    address public administrator;
    string public name;
    uint public dateCreated = now;

	function User(string _name, address _administrator, uint _role) {
		state = State.Applied;
		name = _name;
		administrator = _administrator;
		role = Role(_role);
		UserStateChanged(this, state, role, administrator);
	}

	function setState(uint _state) returns (bool) {
		//user cannot change their own status, can only be done by the issuing administrator
		if(msg.sender != administrator) {
			return false;
		}
		
		state = State(_state);
		return true;
	}

	function getType() public returns (int) {
		throw;
	}

	function getState() public returns (uint) {
		return uint(state);
	}

	function getRole() private returns (uint) {
		return uint(role);
	}

	function isRole(uint _role) public returns (bool) {
		return _role == getRole();
	}

	function changeState(uint _state) public returns (bool) {
		//user can't change their own state
		if(msg.sender != administrator) {
			return false;
		}
		state = convertUIntToState(_state);
		return true;
	}

	function accept() public returns (bool) {
		if(msg.sender != administrator) {
			return false;
		}
		state = State.Accepted;
		return true;
	}

	function reject() public returns (bool) {
		if(msg.sender != administrator) {
			return false;
		}
		state = State.Rejected;
		return true;
	}

	function suspend() public returns (bool) {
		if(msg.sender != administrator) {
			return false;
		}
		state = State.Suspended;
		return true;
	}

	function expel() public returns (bool) {
		if(msg.sender != administrator) {
			return false;
		}
		state = State.Expelled;
		return true;
	}

	function kill() public {
		if (msg.sender == owner) suicide(owner);
	}

	function convertUIntToState(uint _state) private returns (State) {
		if (_state == 0) {
			return State.Applied;
		} else if(_state == 1) {
			return State.Accepted;
		} else if(_state == 2) {
			return State.Rejected;
		} else if(_state == 3) {
			return State.Suspended;
		} else if(_state == 4) {
			return State.Expelled;
		}
		throw;
	}
}
