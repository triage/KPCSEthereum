import {User} from "./User.sol";
import {Certificate} from "Certificate.sol";

contract Party is User("name", 0x0, 5) {
	enum State {
		Applied, Active, Suspended
	}

	State public state;
	string public name;
	string public contactDetails;
	address public authority;
	mapping(address => Certificate) public certificates;

	function Party(address _authority, string _name, string _contactDetails) {
		authority = _authority;
		name = _name;
		contactDetails = _contactDetails;
	}

	function createCertificate(address certificate) returns (Certificate) {

	}
}
