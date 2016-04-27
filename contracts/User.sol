import {UserType} from "./UserType.sol";
import {UserState} from "./UserState.sol";

contract User {
	enum State {
		Applied, Accepted, Rejected, Suspended
	}
	State public state;

	event UserStateChanged(address user, State state, address administrator);

    address public owner;
    address public administrator;
    string public name;
    uint public dateCreated = now;

	function User(string _name, address _administrator) {
		state = State.Applied;
		name = _name;
		owner = msg.sender;
		administrator = _administrator;
		UserStateChanged(this, state, administrator);
	}

	function setState(uint _state) public returns (bool) {
		//user cannot change their own status, can only be done by the issuing administrator
		if(msg.sender != administrator) {
			return false;
		}
		state = State(_state);
		return true;
	}

	function getName() public returns (string) {
		return name;
	}

	function getType() public returns (int) {
		throw;
	}

	function getState() public returns (uint) {
		return uint(state);
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

	function kill() public {
		if (msg.sender == owner) suicide(owner);
	}
}
