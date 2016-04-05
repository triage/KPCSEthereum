contract('KPCS', function(accounts) {
  it("should assert true", function(done) {
    var kpcs = KPCS.at(KPCS.deployed_address);
    assert.isTrue(true);
	KPCS.new({ from: accounts[0] }).then(
		function(address) {
			console.log("new kpcs address:");
			console.log(address);
			console.log("xxxxxxxxxxxxxxxxxxxxx")
			return kpcs.registerAsParticipant("Brooklyn", {from: accounts[1], value: 0})
		}
	).then(
		function(transaction) {
			console.log("tx address from callback:" + transaction);
			// done();
			// console.log(address);
			// contract('Participant', function(accounts){
			// 	var participant = Participant.deployed();
			// 	console.log(participant);
			// 	return participant.name.call(accounts[1]);
			// })
			var event = kpcs.allEvents().watch({}, '');
		    event.watch(function (error, result) { 
		      if (error) {
		        console.log("Error: " + error);
		      } else {
		        console.log("GOT EVENT: " + result.event);
		      }
		      done();
		    })
		}
	).catch(done);
  });
});