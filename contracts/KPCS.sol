import {Certificate} from "./Certificate.sol";
import {Participant} from "./Participant.sol";
import {KPCSAdministrator} from "./KPCSAdministrator.sol";
import {Administrator} from "./Administrator.sol";

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
}
