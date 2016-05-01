# KimberlyProcessEthereum
An implementation of The Kimberley Process's certificate issuance and validation system built on the Ethereum blockchain.

---

[My complete thoughts on diamonds, the diamond industry and The Kimberley Process are available here.](http://romancingthestones.diamonds)
[http://romancingthestones.diamonds](http://romancingthestones.diamonds)

---

##About

[The Kimberley Process](http://www.kimberleyprocess.com) (KP) is a joint government, industry and civil society initiative to stem the flow of conflict diamonds – rough diamonds used by rebel movements to finance wars against legitimate governments.

Beyond the often-raised criticisms of the policy, scope and rules of the KPCS, flaws in the technical execution of the scheme are quite evident in the integrity of the certificates themselves, and therefore also in the entire process.

In order to bring both transparency and integrity to the KP, my proposal is to put the entirety of the certificate issuance process, as well as all participants, authorities, observers, agents and parties, on the Ethereum Blockchain. The specific features of the blockchain (mathematically-enforced integrity, immutability, independence from any trusted 3rd party) would be a dramatic improvement over the current system of paper certificates and their known weaknesses, such as  susceptibility to forgery, varying certificate security features, generous expiration dates (and therefore the possibility of re-use), etc.

---

##Definitions

###Participant
Member countries that are participants in The Kimberley Process.
[Here is a current list of participant countries](http://www.kimberleyprocess.com/en/participants)

###Particpant Authority
An authority designated by the Particpant with the power to issue certificates. For example, the Ministry of Mines and Mineral Resources (Sierra Leone). These authorities do not issue certificates directly, but rather delegate those powers to specific employees, or agents.

###Participant Agent
An individual designated by a Participant Authority with the power to issue certificates.

###Party
An entity or individual acting as either the source or destination of the shipment of rough diamonds over international borders.

---

##Certificate issuance process:

###1. A certificate is created by the exporting party, with references to:
- the importing party we are sending the shipment to
- the source participant
- the destination participant

```solidity
//Certificate.sol:
function Certificate(address _exporter,
    address _importer,
    address _participantSource,
    address _participantDestination) {
    ...
}
```

Each certificate contains the following data:

1. Participants
	- _origin:_ geological origins where goods were mined from. This value is not set directly, but is derived from the origins of the parsels.
	- _source:_ participant country the shipment is being sent from.
	- _destination:_ participant country the shipment is being sent to.

2. Agents
	- _exporting:_ agent delegated by source participant's exporting authority the power to sign certificates.
	- _importing:_ agent delegated by destination participant's importing authority the power to sign certificates.

3. Parties
	- _exporting:_ entity or individual goods are being sent from
	- _importing:_ entity or individual goods are being sent to

4. Parsels
	- An array consisting of parsels of goods included in the shipment. Data includes:
		- carats
		- value
		- geological origins

###2. Parsels are added to the certificate:
```solidity
//Certificate.sol
function addParsel(string carats,
	string value,
	address[] origins) {
		...
}
```
Each parsel contains:
- carats (string until Solidity supports floating point numbers)
- assessed value (string until Solidity supports floating point numbers)
- participant addresses of geological origins

###3. Signatures required from:
1. importing party
2. exporting authority agent
3. importing authority agent

```solidity
//Certificate.sol
function sign() {
	...
}
```

Upon receipt of the last required signature, the certificate is issued and shipment is cleared for transit.

###4. Importing authority marks shipment as received:

```solidity
//Certificate.sol:
function markAsReceived() {
	...
}
```

Upon acknowleged receipt of the shipment, the importing authority marks the certificate as received, completing the certificate.
