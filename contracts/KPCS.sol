import {KPCSAdministrator} from "./KPCSAdministrator.sol";
import {User} from "./User.sol";
import {UserType} from "./UserType.sol";
import {Certificate} from "./Certificate.sol";
import {Participant} from "./Participant.sol";
import {Party} from "./Party.sol";

contract KPCS {

	event CertificateIssued(address _certificate);

	address private owner;

	KPCSAdministrator private administrator;

	//all certificates
	mapping(address => address) public certificates;

	//member countries
	mapping(address => address) public participants;

	//member countries
	mapping(address => address) public parties;

	event ParticipantRegistered(address participant);

	function KPCS() {
		administrator = new KPCSAdministrator("KPCS Administrator", msg.sender);
		owner = msg.sender;
	}

	function kill() public {
		if (msg.sender == owner) suicide(owner);
	}

	function registerAsParty(address _party) public {
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

	function registerParticipant(address participant) public {
		if(msg.sender != owner) {
			throw;
		}
		participants[participant] = participant;
		ParticipantRegistered(participant);
	}

	function participantCanParticipate(address participant) public returns (bool) {
		return participants[participant] != 0x0;
	}
}
