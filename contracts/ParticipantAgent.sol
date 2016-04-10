import {Administrator} from "./Administrator.sol";
import {UserType} from "./UserType.sol";

contract ParticipantAgent is Administrator("name", 0x0, 3) {
	/*
		ParticipantAgents are entities delegated by Participants
		(e.g. the Minister of Mines and Mining) the power to
		issue certificates.

		These individuals can act on behalf of the Particiapnt to:
		1. sign certificates
		2. managed Party entities

	*/

	address public participant;

	function ParticipantAgent(string _name, address _participant) {
		owner = msg.sender;
		participant = _participant;
		name = _name;
	}
	function getType() public returns (int) {
		return UserType.ParticipantAgent();
	}
}
