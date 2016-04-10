var Brooklyn = "Brooklyn";

contract('KPCS', function(accounts) {
  it("should assert true", function(done) {
  	var kpcs;
  	KPCS.new({from: accounts[0]}).then(
  		function (instance) {
  			kpcs = instance;
  			console.log(kpcs);
  		}
  	).then(
  		function() {
  			return Participant.new(Brooklyn, accounts[0], {from: accounts[1]});
  		}
  	).then(
  		function(participant) {
  			return participant.name.call();
  		}
  	).then(
  		function(name) {
  			assert.equal(name, Brooklyn);
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