import {User} from "./User.sol";
import {UserType} from "./UserType.sol";
import {Certificate} from "./Certificate.sol";
import {Participant} from "./Participant.sol";
import {UserState} from "./UserState.sol";
//import {Party} from "./Party.sol";

contract KPCS {

	event CertificateIssued(address _certificate);

	address private owner;

	address public administrator;

	//all certificates
	mapping(address => address) public certificates;

	//member countries
	mapping(address => address) public participants;

	//member countries
	mapping(address => address) public parties;

	event ParticipantRegistered(address participant);

	function KPCS(address _administrator) {
		administrator = _administrator;
		owner = msg.sender;
	}

	function kill() {
		if (msg.sender == owner) suicide(owner);
	}

	function registerAsParty(address _party) {
		if(msg.sender != owner) {
			return;
		}
		if(User(_party).getType() != UserType.Party() || parties[_party] != 0x0) {
			return;
		}
		parties[_party] = _party;
	}

	function isCertificateRegisteredAndValid(address certificate) returns (bool) {
		return (Certificate(certificate).isValid() && certificates[certificate] != 0x0);
	}

	function registerCertificate(address _certificate) {
		Certificate certificate = Certificate(_certificate);
		if(certificate.isValid()) {
			certificates[_certificate] = certificate;
			CertificateIssued(_certificate);
			return;
		}
		throw;
	}

	function registerParticipant(address _participant) {
		uint foobar = User(_participant).getFoobar();
		// string name = User(_participant).getName.gas(1000)();
		if((msg.sender != owner || participants[_participant] != 0x0) && foobar > 0) {
			throw;
		}

		participants[_participant] = _participant;
		ParticipantRegistered(_participant);
	}

	function participantCanParticipate(address _participant) returns (bool) {
		// && User(_participant).getState() != UserState.Accepted();
		return participants[_participant] != 0x0;
	}
}
