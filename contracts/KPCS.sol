import {Certificate} from "./Certificate.sol";
import {Participant} from "./Participant.sol";
import {KPCSAdministrator} from "./KPCSAdministrator.sol";
import {User} from "./User.sol";

contract KPCS {

	//Administrators
	mapping(address => bool) public registeredAddresses;

	address public owner;

	mapping(address => KPCSAdministrator) public administrators;

	//all certificates
	mapping(address => Certificate) public certificates;

	//member countries
	mapping(address => Participant) public participants;

	function KPCS() {
		administrators[msg.sender] = new KPCSAdministrator("KPCS Genesis Administrator");
		owner = msg.sender;
	}

	function kill() public {
		if (msg.sender == owner) suicide(owner);
	}

	function registerAsAdministrator(string _name) public returns (bool) {
		if(registeredAddresses[msg.sender] == true) {
			return false;
		}
		administrators[msg.sender] = new KPCSAdministrator(_name);
		registeredAddresses[msg.sender] = true;
		return true;
	}

	function registerAsParticipant(string _name) public returns (bool) {
		if(registeredAddresses[msg.sender] == true) {
			return false;
		}
		participants[msg.sender] = new Participant(_name, owner);
		registeredAddresses[msg.sender] = true;
		return true;
	}

	function createCertificate(address _importer, address _exporter, address _participantOrigin, address _participantSource, address _participantDestination) public returns (bool) {
		if(User(msg.sender).getState() != uint(User.State.Accepted)) {
			return false;
		}
		Certificate certificate = new Certificate(_importer, _exporter, _participantOrigin, _participantSource, _participantDestination);
		return true;
	}
}
