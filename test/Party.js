const JuliusKlein = {name: "Julius Klein Diamonds LLC"};

contract('KPCS', function(accounts) {
	it("Register as a Party", function(done) {
		var kpcs;
		KPCS.new({from: accounts[0]}).then(
			function (instance) {
				kpcs = instance;
			}
		).then(
			function() {
				return Party.new(JuliusKlein.name, {from: accounts[0]});
			}
		).then(
			function(party) {
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
