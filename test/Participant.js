const Botswana = {name: "Botswana"};

const admin = {};
var kpcs;

contract('KPCS', function(accounts) {
    it("Register as a Participant, and KPCS Administrator should be able to change their state", function(done) {
        admin.from = accounts[0];
        KPCSAdministrator.new({from: admin.from}).then(
            function(instance) {
                admin.instance = instance;
                return KPCS.new(admin.instance.address, {from: admin.from});
            }
        ).then(
            function (instance) {
                kpcs = instance;
                return Participant.new(Botswana.name, admin.instance.address, {from: accounts[1]});
            }
        ).then(
            function(participant) {
                Botswana.instance = participant;
                return Botswana.instance.accept({from: accounts[0]});   
            }
        ).then(
            function() {
                return kpcs.registerParticipant(Botswana.instance.address);
            }
        ).then(
            function() {
                //accept Botswana
                return Botswana.instance.getState.call();
            }
        ).then(
            function(state) {
                assert.equal(state,1);
                return Botswana.instance.name.call();
            }
        ).then(
            function(name) {
                assert.equal(name, Botswana.name);
                return Botswana.instance.getType.call();
            }
        ).then(
            function(type) {
                //type should be == 1 (Participant)
                assert.equal(type, 1)
                return Botswana.instance.administrator.call();
            }
        ).then(
            function(administrator) {
                assert.equal(administrator, admin.instance.address); //admniistrator should be == accounts[0]
                return Botswana.instance.accept({from: accounts[0]});
            }
        ).then(
            function() {
                return Botswana.instance.getState.call();
            }
        ).then(
            function(state) {
                assert.equal(state, 1); //approved
                return Botswana.instance.reject({from: accounts[0]});
            }
        ).then(
            function() {
                return Botswana.instance.getState.call();
            }
        ).then(
            function(state) {
                assert.equal(state, 2); //rejected
                return Botswana.instance.suspend({from: accounts[0]});
            }
        ).then(
            function() {
                return Botswana.instance.getState.call();
            }
        ).then(
            function(state) {
                assert.equal(state, 3); //suspended

                //assure that only the administrator can change the state
                return Botswana.instance.accept({from: accounts[1]});
            }
        ).then(
            function() {
                return Botswana.instance.getState.call();
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
