import "Administrator";
import "ParticipantAgent";

/*
	ParticipantAuthorities are entities (e.g. The Minister of Mines and Mining),
	designated by a Participant (country) as having the power to issue certificates,
	which is a responsibility that they delegate to their agents acting on their behalf
	(e.g. an employee at the Minister of Mines and Mining).
*/

contract ParticipantAuthority is Administrator("name", 0x0) {
	string public name;
	address public participant;

	mapping(address => ParticipantAgent) public agents;

	function ParticipantAuthority(string _name, address _participant) {
		name = _name;
		participant = _participant;
	}
}
