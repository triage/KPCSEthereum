import Authority from "./Authority"

contract Party {
	enum State {
		Applied, Active, Suspended
	}

	State public state;
	string public name;
	string public contactDetails;
	address public owner

	function Party(string _name, string _contactDetails) {
		owner = msg.sender;
		name = _name;
		contactDetails = _contactDetails;
	}
}
