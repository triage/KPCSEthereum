import Authority from "./Authority"

contract Issuer is Authority {
	public string name;
	public Authority authority;
	public address _address;

	function Issuser(Authority _authority, string _name) {
		authority = _authority;
		name = _name;
		_address = msg.sender;
	}
}
