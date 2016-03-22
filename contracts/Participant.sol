/*
	Particpants are member countries that participate in the Kimberley Process.
*/
contract Participant {
	enum Status {
		Active, Suspended 
	}
	public Status status;

	public string name
	function Participant(string _name) {
		name = _name;
	}

	function changeStatus(Status status) {
		
	}
}
