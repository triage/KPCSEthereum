import Issuer from "./Issuers";
import Administrator from "./Administrator"
import ParticipantAgent from './ParticipantAgent'

/*
	Particpants are member countries that participate in the Kimberley Process.
	They have ParticipantAgents, which are entities (e.g. the Minister of Mines
	and Mining), which have the power to issue certificates
*/
contract Participant is Administrator {
	enum Status {
		Applied, Active, Suspended 
	}
	
	Status public  status;
	address public owner;
	string public name;

	struct Authorities {
		address public importing;
		address public exporting;
	}
	Authorities public authorities; 

	function Participant(string _name, uint _status) {
		name = _name;
		status = convertUIntToStatus(_status);
	}

	function changeStatus(uint _status) returns (bool changed){
		if(msg.sender != owner) {
			return false;
		}
		status = convertUIntToStatus(_status);
		return true;
	}

	function convertUIntToStatus(uint _status) returns (Status) {
		if (_status == 0) {
			return Status.Applied;
		} else if(_status == 1) {
			return Status.Active;
		} else if(_status == 2) {
			return Status.Suspended;
		}
		throw;
	}
}
