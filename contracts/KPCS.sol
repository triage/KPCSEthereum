import "Certificate";
import "Participant";
import "KPCSAdministrator";
import "Administrator";

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

	function registerAsParticipant(string _name) public returns (bool) {
		if(registeredAddresses[msg.sender] == true) {
			return false;
		}
		participants[msg.sender] = new Participant(_name, owner);
		registeredAddresses[msg.sender] = true;
		return true;
	}

	function createCertificate() {

	}
}
