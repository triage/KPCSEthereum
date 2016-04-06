import {User} from "./User.sol";
import {Certificate} from "Certificate.sol";

contract Party is User("name", 0x0, 5) {
	string public name;
	string public contactDetails;
	mapping(address => Certificate) public certificates;

	function Party(string _name, string _contactDetails, address _administrator) {
		name = _name;
		contactDetails = _contactDetails;
		state = State.Applied;
		_administrator = _administrator;
	}
}
