import Certificate from "./Certificate"

contract KPCS {
	mapping(address: => Certificate) certificates
}
