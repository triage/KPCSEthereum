contract User {
	enum State {
		Applied, Accepted, Rejected, Suspended, Expelled
	}
	State public state;

	event UserStateChanged(address user, State state, address administrator);

    address public owner = msg.sender;
    address public administrator;
    string public name;
    uint public creationTime = now;

	function User(string _name, address _administrator) {
		state = State.Applied;
		name = _name;
		administrator = _administrator;
		UserStateChanged(this, state, administrator);
	}

	function changeState(uint _state) returns (bool) {
		if(msg.sender != administrator) {
			return false;
		}
		state = convertUIntToState(_state);
		return true;
	}

	function accept() returns (bool) {
		if(msg.sender != administrator) {
			return false;
		}
		state = State.Accepted;
		return true;
	}

	function reject() returns (bool) {
		if(msg.sender != administrator) {
			return false;
		}
		state = State.Rejected;
		return true;
	}

	function suspend() returns (bool) {
		if(msg.sender != administrator) {
			return false;
		}
		state = State.Suspended;
		return true;
	}

	function expel() returns (bool) {
		if(msg.sender != administrator) {
			return false;
		}
		state = State.Expelled;
		return true;
	}

	function kill() {
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
