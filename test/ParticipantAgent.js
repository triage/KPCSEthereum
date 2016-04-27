const Botswana = {name: "Botswana"};
const Authority = {name: "Ministry of Minerals, Energy and Water Resources"};
const Agent = {name: "Hon Onkokame Kitso Mokaila"};

contract('KPCS', function(accounts) {
	it("Register as a Participant Agent", function(done) {
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
				return Botswana.instance.accept({from: accounts[0]});
			}
		).then(
			function() {
				return kpcs.registerParticipant(Botswana.instance.address,{from: accounts[0]});
			}
		).then(
			function(participant) {
				
				return ParticipantAuthority.new(Authority.name, accounts[1], {from: accounts[2]});
			}
		).then(
			function(authority) {
				Authority.instance = authority;
				return ParticipantAgent.new(Agent.name, accounts[2], {from: accounts[3]});
			}
		).then(
			function(agent) {
				Agent.instance = agent;
				return Agent.instance.name.call();
			}
		).then(
			function(name) {
				assert.equal(name, Agent.name);
				return Agent.instance.administrator.call();
			}
		).then(
			function(administrator) {
				assert.equal(administrator, accounts[2]);
				//approve
				return Agent.instance.accept({from: accounts[2]});
			}
		).then(
			function() {
				return Agent.instance.getState.call();
			}
		).then(
			function(state) {
				assert.equal(state, 1);
				return Agent.instance.reject({from: accounts[3]});
			}
		).then(
			function() {
				return Agent.instance.getState.call();
			}
		).then(
			function(state) {
				//only the admin should be able to approve
				assert.equal(state, 1);
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
