const Botswana = {name: "Botswana"};

contract('KPCS', function(accounts) {
    it("Register as a Participant, and KPCS Administrator should be able to change their state", function(done) {
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
                return kpcs.registerAsParticipant(Botswana.instance.address);
            }
        ).then(
            function(registered) {
                return kpcs.registeredAsParticipant.call(Botswana.instance.address);
            }
        ).then(
            function(registered) {
                assert.equal(registered,true);
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
                return Botswana.instance.getState.call();
            }
        ).then(
            function(state) {
                assert.equal(state, 0) //state should be == 0 (Applied)
                return Botswana.instance.administrator.call();
            }
        ).then(
            function(administrator) {
                assert.equal(administrator, accounts[0]); //admniistrator should be == accounts[0]
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
                console.log("CATCH!");
                console.log(e);
                done();
            }
        })
    });
});