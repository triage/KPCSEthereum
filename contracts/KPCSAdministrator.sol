import {Administrator} from "./Administrator.sol";
import {User} from "./User.sol";

contract KPCSAdministrator is Administrator("name", 0x0, 0) {
	function KPCSAdministrator(string _name) {
		name = _name;
		owner = msg.sender;
		state = State.Accepted;
	}
}
