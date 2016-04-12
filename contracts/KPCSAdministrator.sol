import {Administrator} from "./Administrator.sol";
import {User} from "./User.sol";
import {UserType} from "./UserType.sol";

contract KPCSAdministrator is Administrator("name", 0x0) {
	function KPCSAdministrator(string _name) {
		name = _name;
		owner = msg.sender;
		state = State.Accepted;
	}

	function getType() public returns (int) {
		return UserType.KPCSAdministrator();
	}
}
