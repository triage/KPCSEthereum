import {User} from "./User.sol";

contract Administrator is User("name", 0x0) {
	function Administrator(string _name, address _administrator) {
		name = _name;
		owner = msg.sender;
		administrator = _administrator;
	}

	function getType() public returns (int) {
		return -1;
	}
}
