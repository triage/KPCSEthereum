//participants
//origin (geological):
const Botswana = {name: "Botswana"};
const SierraLeone = {name: "SierraLeone"};

//source (sending from)
const UAE = {name: "United Arab Emirates", authority: {name: "Dubai Diamond Exchange"}, agent: {name: "Peter Meeus"}};

//destination (sending to)
const Belgium = {name: "Belgium", authority: {name: "Antwerp World Diamond Centre"}, agent: {name: "Mr Stéphane Fischler"}};

//parties
//exporting party
const JuliusKlein = {name: "Julius Klein Diamonds LLC"};

//importing party
const ChowTaiFook = {name: "Chow Tai Fook Jewellery Co. Ltd"};

const MyCertificate = {};

const admin = {};

contract('KPCS', function(accounts) {
	it("Should be able to create a certificate, complete it, expire it and check for validity", function(done) {
		var kpcs;
		admin.from = accounts[0];
		KPCS.new({from: accounts[0]}).then(
			function (instance) {
				kpcs = instance;
			}
		).then(
			function() {
				Botswana.from = accounts[1];
				return Participant.new(Botswana.name, admin.from, {from: Botswana.from});
			}
		).then(
			function(botswana) {
				Botswana.instance = botswana;
				SierraLeone.from = accounts[2];
				return Participant.new(SierraLeone.name, admin.from, {from: SierraLeone.from});
			}
		).then(
			function(sierraLeone) {
				SierraLeone.instance = sierraLeone;
				Belgium.from = accounts[3];
				return Participant.new(Belgium.name, admin.from, {from: Belgium.from});
			}
		).then(
			function(belgium) {
				Belgium.instance = belgium;
				UAE.from = accounts[4];
				return Participant.new(UAE.name, admin.from, {from: UAE.from});
			}
		).then(
			function(uae) {
				UAE.instance = uae;
				//now we should accept all of these particpants from the KPCS Administrator
				return Botswana.instance.accept({from: admin.from});
			}
		).then(
			function() {
				return SierraLeone.instance.accept({from: admin.from});
			}
		).then(
			function() {
				return Belgium.instance.accept({from: admin.from});
			}
		).then(
			function() {
				return UAE.instance.accept({from: admin.from});
			}
		).then(
			//create authorities - importer
			function() {
				Belgium.authority.from = accounts[7];
				return ParticipantAuthority.new(Belgium.authority.name, Belgium.instance.address, {from: Belgium.authority.from});
			}
		).then(
			function(instance) {
				Belgium.authority.instance = instance;
				return Belgium.instance.acceptAndRegisterAsExportingAuthority(Belgium.authority.instance.address, {from: Belgium.from});
			}
		).then(
			function() {
				return Belgium.instance.isAcceptedExportingAuthority.call(Belgium.authority.instance.address);
			}
		).then(
			function(isAccepted) {
				assert.equal(isAccepted, true);
				Belgium.agent.from = accounts[8];
				return ParticipantAgent.new(Belgium.agent.name, Belgium.instance.address, {from: Belgium.agent.from});
			}
		).then(
			//create authorities - exporter
			function(instance) {
				Belgium.agent.instance = instance;
				return Belgium.authority.instance.acceptAndRegisterParticipantAgent(Belgium.agent.instance.address, {from: Belgium.authority.from});
			}
		).then(
			function() {
				return Belgium.authority.instance.isSenderRegisteredAgent.call(Belgium.agent.from, {from: Belgium.agent.from});
			}
		).then(
			function(isRegisteredAgent) {
				assert.equal(isRegisteredAgent, true);
				UAE.authority.from = accounts[9];
				return ParticipantAuthority.new(UAE.authority.name, UAE.instance.address, {from: UAE.authority.from});
			}
		).then(
			function(instance) {
				UAE.authority.instance = instance;
				return UAE.instance.acceptAndRegisterAsImportingAuthority(UAE.authority.instance.address, {from: UAE.from});
			}
		).then(
			function() {
				return UAE.instance.isAcceptedImportingAuthority.call(UAE.authority.instance.address);
			}
		).then(
			function(isAccepted) {
				assert.equal(isAccepted, true);
				UAE.agent.from = accounts[10];
				return ParticipantAgent.new(UAE.agent.name, UAE.authority.instance.address, {from: UAE.agent.from});
			}
		).then(
			function(agent) {
				UAE.agent.instance = agent;
				return UAE.authority.instance.acceptAndRegisterParticipantAgent(UAE.agent.instance.address, {from: UAE.authority.from});
			}
		).then(
			function() {
				return UAE.instance.getImportingAuthority.call();
			}
		).then(
			function(authority) {
				assert.equal(authority, UAE.authority.instance.address);
				return UAE.authority.instance.isSenderRegisteredAgent.call(UAE.agent.from, {from: UAE.agent.from});
			}
		).then(
			function(isRegisteredAgent) {
				assert.equal(isRegisteredAgent, true);
				JuliusKlein.from = accounts[5];
				return Party.new(JuliusKlein.name, admin.from, {from: JuliusKlein.from});
			}
		).then(
			function(party) {
				JuliusKlein.instance = party;
				return JuliusKlein.instance.accept({from: admin.from});
			}
		).then(
			function() {
				//create the exporting party
				ChowTaiFook.from = accounts[6];
				return Party.new(ChowTaiFook.name, admin.from, {from: ChowTaiFook.from});
			}
		).then(
			function(party) {
				ChowTaiFook.instance = party;
				return ChowTaiFook.instance.accept({from: admin.from});
			}
		).then(
			//the exporting party creates the certificate
			function() {
				//function Certificate(address _importer, address _exporter, address[] _participantOrigin, address _participantSource, address _participantDestination) {
				return Certificate.new(JuliusKlein.instance.address,
					ChowTaiFook.instance.address,
					[SierraLeone.instance.address, Botswana.instance.address],
					Belgium.instance.address,
					UAE.instance.address,
					{from: JuliusKlein.from});
			}
		).then(
			function(certificate) {
				MyCertificate.instance = certificate;
				//add a parsel to the certificate
				//function addParsel(string carats, string value, address[] origins) returns (bool)
				return MyCertificate.instance.addParsel('100',
					'$1,000,000',
					[SierraLeone.instance.address, Botswana.instance.address], {from: ChowTaiFook.from});
			}
		).then(
			function() {
				return MyCertificate.instance.getImportingPartyOwner.call();
			}
		).then(
			function(importingPartyOwner) {
				assert.equal(ChowTaiFook.from, importingPartyOwner)
				return MyCertificate.instance.getExportingPartyOwner.call();
			}
		).then(
			function (exportingPartyOwner) {
				assert.equal(JuliusKlein.from, exportingPartyOwner);
			}
		).then(
			function() {
				return MyCertificate.instance.canSign.call({from: ChowTaiFook.from});
			}
		).then(
			function(canSign) {
				assert.equal(canSign, true);
				return MyCertificate.instance.sign({from: ChowTaiFook.from});
			}
		).then(
			function() {
				return MyCertificate.instance.getSignatures.call();
			}
		).then(
			//exporting authority should sign
			function(signatures) {
				return MyCertificate.instance.canSign.call({from: Belgium.agent.from});
			}
		).then(
			function(canSign) {
				assert.equal(canSign, true);
				return MyCertificate.instance.sign({from: Belgium.agent.from});
			}
		).then(
			function() {
				return MyCertificate.instance.getSignatures.call();
			}
		).then(
			function(signatures) {
				return MyCertificate.instance.canSign.call({from: UAE.agent.from});
			}
		).then(
			function(canSign) {
				assert.equal(canSign, true);
				return MyCertificate.instance.sign({from: UAE.agent.from});
			}
		).then(
			function() {
				return MyCertificate.instance.getSignatures.call();
			}
		).then(
			function(signatures) {
				console.log(signatures);
				return MyCertificate.instance.numberOfSignatures.call();
			}
		).then(
			function(numberOfSignatures) {
				return MyCertificate.instance.isValid.call();
			}
		).then(
			function(isValid) {
				assert.equal(isValid, true);
				done();
			}
		).catch({
			function(e){
				console.log(e);
				done();
			}
		})
	});
});
