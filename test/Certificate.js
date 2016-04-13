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


contract('KPCS', function(accounts) {
	it("Register as a Participant Authority", function(done) {
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
				return Participant.new(Belgiun.name, accounts[0], {from: accounts[3]});
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
				return Botswana.instance.accept({from: accounts[0]})
			}
		).then(
			function() {
				return SierraLeone.instance.accept({from: accounts[0]})
			}
		).then(
			function() {
				return Belgium.instance.accept({from: accounts[0]});
			}
		}.then(
			function() {
				return UAE.instance.accept({from: accounts[0]});
			}
		}.then(
			//all particpants created and accepted. Create the party
			function() {
				return Party.new(JuliusKlein.name, accounts[0], {from: accounts[5]});
			}
		).then(
			function(party) {
				JuliusKlein.instance = party;
			}
		).catch({
			function(e){
				console.log(e);
				done();
			}
		})
	});
});
