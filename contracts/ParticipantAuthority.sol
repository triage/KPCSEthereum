import Administrator from "./Administrator";
import Agent from "./Agent";

/*
	ParticipantAuthorities are entities (e.g. The Minister of Mines and Mining),
	designated by a Participant (country) as having the power to issue certificates,
	which is a responsibility that they delegate to their agents acting on their behalf
	(e.g. an employee at the Minister of Mines and Mining).
*/

struct ParticipantAuthority is Administrator {
	string public name;
	address public owner;
	address public participant;

	mapping(address => ParticipantAgent) public agents;

	function ParticipantAuthority(string _name, address _participant) {
		owner = msg.sender;
		name = _name;
		participant = _participant;
	}

	mapping(address => Agent) public agents;
}
