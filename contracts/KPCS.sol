// import {Certificate} from "./Certificate.sol";
// import {Participant} from "./Participant.sol";
import {KPCSAdministrator} from "./KPCSAdministrator.sol";
import {User} from "./User.sol";
import {UserType} from "./UserType.sol";

contract KPCS {

	//Administrators
	mapping(address => bool) public registeredAddresses;

	address public owner;

	KPCSAdministrator public administrator;

	//all certificates
	address[] public certificates;

	//member countries
	address[] public participants;

	//member countries
	address[] public parties;

	function KPCS() {
		administrator = new KPCSAdministrator("KPCS Administrator");
		owner = msg.sender;
	}

	function kill() public {
		if (msg.sender == owner) suicide(owner);
	}

	function registered(address _address) private returns (bool) {
		return (registeredAddresses[_address] == true);
	}

	function registerAsParty(address _party) public returns (bool) {
		if(registered(msg.sender) || User(_party).getType() != UserType.Party()) {
			return false;
		}
		parties.push(_party);
		registeredAddresses[msg.sender] = true;
		return true;
	}

	function registerAsParticipant(address _participant) public returns (bool) {
		if(registered(msg.sender) || User(_participant).getType() != UserType.Participant()) {
			return false;
		}
		participants.push(_participant);
		registeredAddresses[msg.sender] = true;
		return true;
	}
}
