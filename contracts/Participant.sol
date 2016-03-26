import {Administrator} from "./Administrator.sol";
import {ParticipantAgent} from './ParticipantAgent.sol';

/*
	Particpants are member countries that participate in the Kimberley Process.
	They delegate ParticipantAgents, which are entities (e.g. the Minister of Mines
	and Mining), which have the power to issue certificates
*/
contract Participant is Administrator {
	enum Status {
		Applied, Active, Suspended 
	}
	
	Status public  status;
	string public name;

	//KPCS IV Each particpant should: (b) designate an Importing and an Exporting Authority(ies);
	struct Authorities {
		address importing;
		address exporting;
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

	function convertUIntToStatus(uint _status) private returns (Status) {
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
