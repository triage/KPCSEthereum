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

	mapping(address => bool) registeredAddresses;
	mapping(address => ParticipantAgent) public agents;

	event ParticipantAgentRegistered(address indexed participant, string indexed name);

	function ParticipantAuthority(string _name, address _participant) {
		name = _name;
		participant = _participant;
		owner = msg.sender;
	}

	function registerAsParticipatingAgent(string _name) public returns (bool) {
		if(registeredAddresses[address] == true) {
			return false;
		}
		agents[msg.sender] = new ParticipantAgent(_name, owner);
		registeredAddresses[address] = true;
		return true;
	}
}
