import "Administrator";

contract KPCSAdministrator is Administrator("name", 0x0) {
	function KPCSAdministrator(string _name) {
		name = _name;
		owner = msg.sender;
	}
	function createParticipant() {

	}
}
