const JuliusKlein = {name: "Julius Klein Diamonds LLC"}

contract('KPCS', function(accounts) {
	it("Register as a Participant Authority", function(done) {
		var kpcs;
		KPCS.new({from: accounts[0]}).then(
			function (instance) {
				kpcs = instance;
			}
		).then(
			function() {
				return Party.new({name: JuliusKlein.name, accounts[0]});
			}
		).then(
			function(party) {

			}
		).catch({
			function(e){
				console.log(e);
				done();
			}
		})
	});
});
