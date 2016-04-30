const Botswana = {name: "Botswana"};
const Authority = {name: "Ministry of Minerals, Energy and Water Resources"};

const admin = {};
var kpcs;

contract('KPCS', function(accounts) {
	it("Register as a Participant Authority", function(done) {
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
				Authority.from = accounts[2];
				return ParticipantAuthority.new(Authority.name, Botswana.instance.address, {from: Authority.from});
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
				assert.equal(administrator, Botswana.instance.address);
				//participant should approve the authority
				return Authority.instance.accept({from: Botswana.from});
			}
		).then(
			function() {
				return Authority.instance.getState.call();
			}
		).then(
			function(state) {
				assert.equal(state, 1); //accepted TODO: replace w/ const
				//assure only the admin can change the state
				return Authority.instance.reject({from: Authority.from});
			}
		).then(
			function() {
				return Authority.instance.getState.call();
			}
		).then(
			function(state) {
				//should have not changed
				assert.equal(state, 1); //accepted TODO: replace w/ const
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
