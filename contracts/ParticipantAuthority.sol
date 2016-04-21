import {Administrator} from "./Administrator.sol";
import {UserType} from "./UserType.sol";
// import {ParticipantAgent} from "./ParticipantAgent.sol";

/*
	ParticipantAuthorities are entities (e.g. The Minister of Mines and Mining),
	designated by a Participant (country) as having the power to issue certificates,
	which is a responsibility that they delegate to their agents acting on their behalf
	(e.g. an employee at the Minister of Mines and Mining).
*/

contract ParticipantAuthority is Administrator("name", 0x0) {

	mapping(address => bool) registeredAgentAddresses;

	event ParticipantAgentRegistered(address indexed participant, string indexed name);

	function ParticipantAuthority(string _name, address _administrator) {
		name = _name;
		owner = msg.sender;
		administrator = _administrator;
	}

	function isRegisteredAgent(address _agent) returns (bool) {
		return registeredAgentAddresses[_agent] == true;
	}

	function registerAsParticipatingAgent(address agent) public returns (bool) {
		if(msg.sender != owner) {
			return false;
		}
		registeredAgentAddresses[true] = true;
		return true;
	}

	function getType() public returns (int) {
		return UserType.ParticipantAuthority();
	}
}
