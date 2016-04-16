//participants
//origin (geological):
const Botswana = {name: "Botswana"};
const SierraLeone = {name: "SierraLeone"};

//source (sending from)
const UAE = {name: "United Arab Emirates"};

//destination (sending to)
const Belgium = {name: "Belgium"};

//parties
//exporting party
const JuliusKlein = {name: "Julius Klein Diamonds LLC"};

//importing party
const ChowTaiFook = {name: "Chow Tai Fook Jewellery Co. Ltd"};


//agents + authorities
//source
const UAEAuthority = {name: "Dubai Diamond Exchange"};
const UAEAgent = {name: "Peter Meeus"};

//destination
const BelgiumAuthority = {name: "Antwerp World Diamond Centre"};
const BelgiumAgent = {name: "Mr Stéphane Fischler"};
const MyCertficate = {};


contract('KPCS', function(accounts) {
	it("Should be able to create a certiciate, complete it, expire it and check for validity", function(done) {
		var kpcs;
		KPCS.new({from: accounts[0]}).then(
			function (instance) {
				kpcs = instance;
			}
		).then(
			function() {
				return Participant.new(Botswana.name, accounts[0], {from: accounts[1]});
			}
		).then(
			function(botswana) {
				Botswana.instance = botswana;
				return Participant.new(SierraLeone.name, accounts[0], {from: accounts[2]});
			}
		).then(
			function(sierraLeone) {
				SierraLeone.instance = sierraLeone;
				return Participant.new(Belgium.name, accounts[0], {from: accounts[3]});
			}
		).then(
			function(belgium) {
				Belgium.instance = belgium;
				return Participant.new(UAE.name, accounts[0], {from: accounts[4]});
			}
		).then(
			function(uae) {
				UAE.instance = uae;

				//now we should accept all of these particpants from the KPCS Administrator
				return Botswana.instance.accept({from: accounts[0]});
			}
		).then(
			function() {
				return SierraLeone.instance.accept({from: accounts[0]});
			}
		).then(
			function() {
				return Belgium.instance.accept({from: accounts[0]});
			}
		).then(
			function() {
				return UAE.instance.accept({from: accounts[0]});
			}
		).then(
			//all particpants created and accepted. Create the importing party
			function() {
				return Party.new(JuliusKlein.name, accounts[0], {from: accounts[5]});
			}
		).then(
			function(party) {
				JuliusKlein.instance = party;
				JuliusKlein.instance.accept({from: accounts[0]});
			}
		).then(
			function(tx) {
				//create the exporting party
				return Party.new(ChowTaiFook.name, accounts[0], {from: accounts[6]});
			}
		).then(
			function(party) {
				ChowTaiFook.instance = party;
				ChowTaiFook.instance.accept({from: accounts[0]});
			}
		).then(
			//create a certificate
			function() {
				//function Certificate(address _importer, address _exporter, address[] _participantOrigin, address _participantSource, address _participantDestination) {
				return Certificate.new(ChowTaiFook.instance.address,
					JuliusKlein.instance.address,
					[SierraLeone.instance.address, Botswana.instance.address],
					Belgium.instance.address,
					UAE.instance.address);
			}
		).then(
			function(certificate) {
				MyCertficate.instance = certificate;
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
