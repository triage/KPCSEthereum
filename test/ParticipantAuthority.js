const Botswana = {name: "Botswana"};
const Authority = {name: "Ministry of Minerals, Energy and Water Resources"};


contract('KPCS', function(accounts) {
  it("Register as a Participant Authority", function(done) {
  	var kpcs;
  	var participant;
  	KPCS.new({from: accounts[0]}).then(
  		function (instance) {
  			kpcs = instance;
  			console.log(kpcs);
  		}
  	).then(
  		function() {
  			return ParticipantAuthority.new(Authority.name, accounts[0], {from: accounts[1]});
  		}
  	).then(
  		function() {
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