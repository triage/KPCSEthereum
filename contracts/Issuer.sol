import Authority from "./Authority";
import Agent from "./Agent";

struct Issuer is Authority {

	struct IssuerAgent {
		/*
			Agents can:
			- create Parties
			- sign certificates
		*/
		string public name;
		string public contactDetails;
		uint public dateCreated;
	}

	string public name;
	Authority public authority;
	address public issuerAddress;
	mapping(address => Agent) public agents;
}
