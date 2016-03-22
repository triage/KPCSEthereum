import Certificate from "./Certificate"
import Issuer from "./Issuer"
import Party from "./Party"
import Participant from "./Participant"
import Authority from "./Authority"

contract KPCS {

	mapping(address: => Authority) public authorities
	mapping(address: => Issuer) public issuers
	mapping(address: => Party) public parties
	mapping(address: => Certificate) public certificates
	mapping(address: => Participant) public participants

}
