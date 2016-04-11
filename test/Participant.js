const Brooklyn = {name: "Brooklyn"};

contract('KPCS', function(accounts) {
  it("Register as a Participant, and KPCS Administrator should be able to change their state", function(done) {
  	var kpcs;
  	var participant;
  	KPCS.new({from: accounts[0]}).then(
  		function (instance) {
  			kpcs = instance;
  			console.log(kpcs);
  		}
  	).then(
  		function() {
  			return Participant.new(Brooklyn.name, accounts[0], {from: accounts[1]});
  		}
  	).then(
  		function(participant) {
  			Brooklyn.instance = participant;
  			return participant.name.call();
  		}
  	).then(
  		function(name) {
  			assert.equal(name, Brooklyn.name);
  			return Brooklyn.instance.getType.call();
  		}
  	).then(
  		function(type) {
  			//type should be == 1 (Participant)
  			assert.equal(type, 1)
  			return Brooklyn.instance.getState.call();
  		}
  	).then(
  		function(state) {
  			assert.equal(state, 0) //state should be == 0 (Applied)
  			return Brooklyn.instance.administrator.call();
  		}
  	).then(
  		function(administrator) {
  			assert.equal(administrator, accounts[0]); //admniistrator should be == accounts[0]
			return Brooklyn.instance.accept({from: accounts[0]});
		}
  	).then(
  		function() {
  			return Brooklyn.instance.getState.call();
  		}
  	).then(
  		function(state) {
  			assert.equal(state, 1); //approved
  			return Brooklyn.instance.reject({from: accounts[0]});
  		}
  	).then(
  		function() {
  			return Brooklyn.instance.getState.call();
  		}
  	).then(
  		function(state) {
  			assert.equal(state, 2); //rejected
  			return Brooklyn.instance.suspend({from: accounts[0]});
  		}
  	).then(
  		function() {
  			return Brooklyn.instance.getState.call();
  		}
  	).then(
  		function(state) {
  			assert.equal(state, 3); //suspended

  			//assure that only the administrator can change the state
  			return Brooklyn.instance.accept({from: accounts[1]});
  		}
  	).then(
  		function() {
  			return Brooklyn.instance.getState.call();
  		}
  	).then(
  		function(state) {
  			//state should be unchanged
  			assert.equal(state, 3);
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