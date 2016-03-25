import Authority from "./Authority"

contract IssuerAgent {
	/*
		Agents can:
		- create Parties
		- sign certificates
	*/
	
	string public name;
	string public contactDetails;
	uint public dateCreated;

	function signCertificate(Certificate _certificate) {

	}
}
