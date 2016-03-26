contract User {
	enum State {
		Applied, Accepted, Rejected, Suspended, Expelled
	}
	State public state;

	event UserStateChanged(address user, address authority, uint state);

    address public owner = msg.sender;
    address public authority;
    uint public creationTime = now;

	function User(address _authority) {
		state = State.Applied;
		authority = _authority;
		UserStateChanged(owner, authority, uint(state));
	}

	function changeState(uint _state) returns (bool) {
		if(msg.sender != authority) {
			return false;
		}
		state = convertUIntToState(_state);
		return true;
	}

	function accept() returns (bool) {
		if(msg.sender != authority) {
			return false;
		}
		state = State.Accepted;
		return true;
	}

	function reject() returns (bool) {
		if(msg.sender != authority) {
			return false;
		}
		state = State.Rejected;
		return true;
	}

	function suspend() returns (bool) {
		if(msg.sender != authority) {
			return false;
		}
		state = State.Suspended;
		return true;
	}

	function expel() returns (bool) {
		if(msg.sender != authority) {
			return false;
		}
		state = State.Expelled;
		return true;
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
