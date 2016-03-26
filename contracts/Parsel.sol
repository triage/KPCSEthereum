import {Participant} from "./Participant.sol";

contract Parsel {
	string public carats;
	string public value;
	address[] public origins;

	function Parsel(string _carats, string _value, address[] _origins) {
		carats = _carats;
		value = _value;
		origins = _origins;
	}
}
