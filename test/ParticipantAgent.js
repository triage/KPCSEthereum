const Botswana = {name: "Botswana"};
const Authority = {name: "Ministry of Minerals, Energy and Water Resources"};
const Agent = {name: "Hon Onkokame Kitso Mokaila"};

const admin = {};
var kpcs;

contract('KPCS', function(accounts) {
	it("Register as a Participant Agent", function(done) {
        admin.from = accounts[0];
        KPCSAdministrator.new({from: admin.from}).then(
            function(instance) {
                admin.instance = instance;
                return KPCS.new(admin.instance.address, {from: admin.from});
            }
        ).then(
            function (instance) {
                kpcs = instance;
                Botswana.from = accounts[1];
				return Participant.new(Botswana.name, admin.instance.address, {from: Botswana.from});
			}
		).then(
			function(participant) {
				Botswana.instance = participant;
				return Botswana.instance.accept({from: admin.from});
			}
		).then(
			function() {
				return kpcs.registerParticipant(Botswana.instance.address,{from: admin.from});
			}
		).then(
			function(participant) {
				Authority.from = accounts[2];
				return ParticipantAuthority.new(Authority.name, Botswana.instance.address, {from: Authority.from});
			}
		).then(
			function(authority) {
				Authority.instance = authority;
				Agent.from = accounts[3];
				return ParticipantAgent.new(Agent.name, Authority.instance.address, {from: Agent.from});
			}
		).then(
			function(agent) {
				Agent.instance = agent;
				return Agent.instance.getName.call();
			}
		).then(
			function(name) {
				assert.equal(name, Agent.name);
				return Agent.instance.getAdministrator.call();
			}
		).then(
			function(administrator) {
				assert.equal(administrator, Authority.instance.address);
				//approve
				return Agent.instance.accept({from: Authority.from});
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
