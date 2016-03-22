import Authority from "./Authority"

contract Issuser {
	string name;
	Authority authority;

	function Issuser(Authority _authority, string _name) {
		authority = _authority;
		name = _name;
	}
}
