import {Certificate} from "./Certificate.sol";
import {Participant} from "./Participant.sol";
import {KPCSAdministrator} from "./KPCSAdministrator.sol";
import {User} from "./User.sol";
import {Party} from "./Party.sol";

contract KPCS {

	//Administrators
	mapping(address => bool) public registeredAddresses;

	address public owner;

	KPCSAdministrator public administrator;

	//all certificates
	mapping(address => Certificate) public certificates;

	//member countries
	mapping(address => Participant) public participants;

	//member countries
	mapping(address => Party) public parties;

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

	function registerAsParty(string _name, string _contactDetails) public returns (bool) {
		if(registered(msg.sender)) {
			return false;
		}
		parties[msg.sender] = new Party(_name, _contactDetails, owner);
		registeredAddresses[msg.sender] = true;
		return true;
	}

	function registerAsParticipant(string _name) public returns (bool) {
		if(registered(msg.sender)) {
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
