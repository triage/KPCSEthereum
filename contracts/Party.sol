import {User} from "./User.sol";
import {Certificate} from "Certificate.sol";
import {KPCSAdministrator} from "KPCSAdministrator.sol";
import {Certificate} from "Certificate.sol";

contract Party is User("name", 0x0, 5) {
	string public name;
	string public contactDetails;
	KPCSAdministrator public administrator;
	mapping(address => Certificate) public certificates;

	function Party(string _name, string _contactDetails, address _administrator) {
		name = _name;
		contactDetails = _contactDetails;
		state = State.Applied;
		_administrator = _administrator;
	}

	/*
	A certificate can only be created by the exporting party.
	It is then sent to the importing party, participants
	(destination, origin)'s agents for their signatures of approval.
	*/
	function createCertificate(address _importerParty, address[] _participantOrigin, address _participantSource, address _participantDestination) public returns (bool) {
		if(getState() != 1 || msg.sender != owner) {
			return false;
		}
		Certificate certificate = new Certificate(_importerParty, owner, _participantOrigin, _participantSource, _participantDestination);
		return true;
	}
}
