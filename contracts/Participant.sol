import Authority from "./Authority"

contract Participant {
	string name;
	string contactDetails;
	Authority authority;

	function Participant(Authority _authority, string _name, string _contactDetails) {
		authority = _authority;
		name = _name;
		contactDetails = _contactDetails;
	}
}
