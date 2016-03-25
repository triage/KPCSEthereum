import User from "./User"
import Certificate from "./Certificate"

contract Party is User {
	enum State {
		Applied, Active, Suspended
	}

	State public state;
	string public name;
	string public contactDetails;
	address public authority;
	address public owner
	mapping(address => Certificate) public certificates;

	function Party(_authority, string _name, string _contactDetails) {
		owner = msg.sender;
		authority = _authority;
		name = _name;
		contactDetails = _contactDetails;
	}

	function createCertificate(address ) returns (Certificate) {

	}
}
