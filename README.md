# KimberlyProcessEthereum
An implementation of The Kimberley Process's certificate issuance and validation system built on the Ethereum blockchain.

---

__My complete thoughts on diamonds, the diamond industry and The Kimberley Process are available here:__
[http://romancingthestones.diamonds](http://romancingthestones.diamonds)

---

##About

[The Kimberley Process](http://www.kimberleyprocess.com) (KP) is a joint government, industry and civil society initiative to stem the flow of conflict diamonds – rough diamonds used by rebel movements to finance wars against legitimate governments.

Implementation of the KP is outlined in the [KPCS Core Document](http://www.kimberleyprocess.com/en/kpcs-core-document).

In order to bring both transparency and integrity to the KP, my proposal is to put the entirety of the certificate issuance process, including all participants, authorities, observers, agents and parties, on the Ethereum blockchain. The specific features of the blockchain (cryptographically-enforced security, immutability, transparency, public availability of data) would be a dramatic improvement over the current system of paper certificates and their known weaknesses, such as  susceptibility to forgery, varying certificate security features, and overly-generous expiration dates (and therefore the possibility of re-use).

[A more general overview of my proposal is available here on Medium.com](https://medium.com/@jacksonadams/my-complete-thoughts-on-diamonds-are-here-5e1a27e2acbe#.th0kk2edm)

---

##Definitions

###Participant
Member countries that are participants in The Kimberley Process.
[Here is a current list of participant countries](http://www.kimberleyprocess.com/en/participants)

###Participant Authority
An authority designated by the Particpant with the power to issue certificates. For example, the _Ministry of Mines and Mineral Resources (Sierra Leone)_. These authorities do not issue certificates directly, but rather delegate those powers to specific employees, or agents.

###Participant Agent
An individual designated by a Participant Authority with the power to issue certificates.

###Party
An entity or individual acting as either the source or destination of the shipment of rough diamonds over international borders, ie a rough diamond trader, manufacturer or mining company.

---

##Certificate issuance process:

###1. A certificate is created by the exporting party, with references to:
- the importing party we are sending the shipment to
- the source participant
- the destination participant

```solidity
//Certificate.sol:
    function Certificate(address _kpcs,
        address _exporter,
        address _importer,
        address _participantSource,
        address _participantDestination)
    ...
}
```

Each certificate must contain the following data:

1. Participants
	- _Origins:_ geological origins where goods were mined from. _Note: This value is not set directly, but is derived from the origins of the parsels._
	- _Source:_ participant country the shipment is being sent from.
	- _Destination:_ participant country the shipment is being sent to.

2. Agents
	- _Exporting:_ agent delegated by source participant's exporting authority the power to sign certificates.
	- _Importing:_ agent delegated by destination participant's importing authority the power to sign certificates.

3. Parties
	- _Exporting:_ entity or individual goods are being sent from
	- _Importing:_ entity or individual goods are being sent to

4. Parsels
	- An array consisting of parsels of goods included in the shipment. Data includes:
		- carats
		- value
		- geological origins

###2. Parsels are added to the certificate:
```solidity
//Certificate.sol
function addParsel(uint carats,
	uint value,
	address[] origins) {
		...
}
```
Each parsel contains:
- Carats
- Assessed value
- Addresses of participant countries of geological origins

Finally, the creator must call: `Certificate.completedAddingParsels` to complete the parsel addition process, and request the authorities and parties to sign the certificate

###4. Signatures required from:
1. Importing party
2. Exporting authority's agent
3. Importing authority's agent

```solidity
//Certificate.sol
function sign() {
	...
}
```

Upon receipt of the last required signature (order is unimportant), the certificate is issued and shipment is cleared for validation.

###5. Certificate must be added to the main instance of KPCS.
This ensures that all participants noted on the certificate are recognized by the main instance of KPCS, therefore validating the certificate and adding a reference to it to from the main instance.

###6. Importing authority marks shipment as received:

```solidity
//Certificate.sol:
function markAsReceived() {
	...
}
```

Upon acknowleged receipt of the shipment, the importing authority marks the certificate as received, completing the certificate.
Note: KPCS Core Documents marks this step as optional.
