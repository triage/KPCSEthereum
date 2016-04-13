// const Botswana = {name: "Botswana"};
// const SierraLeone = {name: "SierraLeone"};
// const Belgium = {name: "Belgium"};
// const UAE = {name: "United Arab Emirates"};

// const Authority = {name: "Ministry of Minerals, Energy and Water Resources"};

// contract('KPCS', function(accounts) {
// 	it("Create a certificate", function(done) {
// 		var kpcs;
// 		KPCS.new({from: accounts[0]}).then(
// 			function (instance) {
// 				kpcs = instance;
// 			}
// 		).then(
// 			function() {
// 				return Participant.new(Botswana.name, accounts[0], {from: accounts[1]});
// 			}
// 		).then(
// 			function(botswana) {
// 				Botswana.instance = botswana;
// 				return Participant.new(SierraLeone.name, accounts[0], {from: accounts[2]});
// 			}
// 		).then(
// 			function(sierraLeone) {
// 				SierraLeone.instance = sierraLeone;
// 				return Participant.new(Belgiun.name, accounts[0], {from: accounts[3]});
// 			}
// 		).then(
// 			function(belgium) {
// 				Belgium.instance = belgium;
// 				return Participant.new(UAE.name, accounts[0], {from: accounts[4]});
// 			}
// 		).then(
// 			function(uae) {
// 				UAE.instance = uae;
// 				//now we should accept all of these particpants from the KPCS Administrator
// 				return Botswana.instance.accept({from: accounts[0]})
// 			}
// 		).then(
// 			function() {
// 				return SierraLeone.instance.accept({from: accounts[0]})
// 			}
// 		).then(
// 			function() {
// 				return Belgium.instance.accept({from: accounts[0]});
// 			}
// 		}.then(
// 			function() {
// 				return UAE.instance.accept({from: accounts[0]});
// 			}
// 		}.catch({
// 			function(e){
// 				console.log(e);
// 				done();
// 			}
// 		})
// 	});
// });