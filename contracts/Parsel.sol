import "Participant";

contract Parsel {
	string public carats;
	string public value;
	address[] public origins;
	address public owner;

	function Parsel(string _carats, string _value, address[] _origins) {
		carats = _carats;
		value = _value;
		origins = _origins;
		owner = msg.sender;
	}

	function kill() {
		if (msg.sender == owner) suicide(owner);
	}
}
