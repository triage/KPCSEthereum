import Authority from "./Authority"

contract Party {
	enum State {
		Applied, Active, Suspended
	}
	public State state;

	public string name;
	public string contactDetails;
	mapping(address => Authority) public authority;

	function Party(Authority _authority, string _name, string _contactDetails) {
		authority = _authority;
		name = _name;
		contactDetails = _contactDetails;
	}
}
