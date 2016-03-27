import "Certificate";
import "Participant";
import "KPCSAdministrator";
import "Administrator";

contract KPCS {

	//Administrators
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

	function kill() {
		if (msg.sender == owner) suicide(owner);
	}
}
