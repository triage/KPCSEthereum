import {Administrator} from "./Administrator.sol";
import {User} from "./User.sol";
import {UserType} from "./UserType.sol";

contract KPCSAdministrator is Administrator("name", 0x0) {
	function KPCSAdministrator(string _name, address _owner) {
		name = _name;
		owner = _owner;
		state = State.Accepted;
	}

	function getType() public returns (int) {
		return UserType.KPCSAdministrator();
	}
}
