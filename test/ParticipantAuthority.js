const Botswana = {name: "Botswana"};
const Authority = {name: "Ministry of Minerals, Energy and Water Resources"};

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
  		function(participant) {
  			Botswana.instance = participant;
  			return ParticipantAuthority.new(Authority.name, Botswana.instance.administrator, {from: accounts[2]});
  		}
  	).then(
  		function(authority) {
  			Authority.instance = authority;
  			return Authority.instance.name.call();
  		}
  	).then(
  		function(name) {
  			assert.equal(name, Authority.name);
  			return Authority.instance.administrator.call();
  		}
  	).then(
  		function (administrator) {
  			assert.equal(administrator, Botswana.instance.address)
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