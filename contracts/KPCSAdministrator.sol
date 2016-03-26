import {Administrator} from "./Administrator.sol";

contract KPCSAdministrator is Administrator {
	function KPCSAdministrator(string _name) {
		name = _name;
	}
}
