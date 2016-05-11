// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"getType","outputs":[{"name":"","type":"int256"}],"type":"function"},{"constant":false,"inputs":[],"name":"getAdministrator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"getName","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"getState","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"dateCreated","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"accept","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"reject","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"contactDetails","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"uint256"}],"name":"setState","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[],"name":"getNameHash","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[],"name":"suspend","outputs":[],"type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_administrator","type":"address"},{"name":"_contactDetails","type":"string"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"state","type":"User.State"},{"indexed":false,"name":"administrator","type":"address"}],"name":"UserStateChanged","type":"event"}],
    binary: "60606040524260036000505560405161080c38038061080c833981516080805160a0805190850160405260048587019081527f6e616d6500000000000000000000000000000000000000000000000000000000939095019283526000805460ff1990811682556002805481845295519091166008178155948701969295919092019390926100dc907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace602061010060018416150260001901909216849004601f01919091048101905b808211156101b457600081556001016100c8565b50506000805461010060a860020a0319163361010002179081905560018054600160a060020a03191683179081905560408051600160a060020a03308116825260ff949094166020820152919092168183015290517f02341e2d1bb4aad6cc87f66d24928a0f204b5c0d0230234b34526a29f98bb79d9181900360600190a150508260026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101b857805160ff19168380011785555b506101e89291506100c8565b5090565b828001600101855582156101a8579182015b828111156101a85782518260005055916020019190600101906101ca565b50508060046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061024157805160ff19168380011785555b506102719291506100c8565b82800160010185558215610235579182015b82811115610235578251826000505591602001919060010190610253565b50506000805460ff1916905560018054600160a060020a0319168317905550505061056c806102a06000396000f3606060405236156100ae5760e060020a600035046315dae03e81146100b0578063169674071461010457806317d7de7c146101175780631865c57d1461017e5780631f741c7a1461018c5780632852b71c1461019557806341c0e1b5146101fd5780634dc415de146102305780636e94fadc14610298578063893d20e8146102f6578063a9e966b71461030f578063c19d93fb14610333578063e102d9501461033f578063e6400bbe14610382575b005b6103ea6000739f696e72ed09a741d8155367ce278ec772f07ce463361a4eb86040518160e060020a0281526004018090506020604051808303818660325a03f4156100025750506040515191506101149050565b6103fc600154600160a060020a03165b90565b6104196040805160208181018352600082528251600280546001811615610100026000190116819004601f810184900484028301840190955284825292939092918301828280156105305780601f1061050557610100808354040283529160200191610530565b6103ea60005460ff16610114565b6103ea60035481565b6001546040805160e360020a631127a41d02815290516100ae92600160a060020a03169163893d20e891600482810192602092919082900301816000876161da5a03f1156100025750506040515133600160a060020a03908116911614905061053c5761054a565b6100ae6000546101009004600160a060020a0390811633909116141561054a576000546101009004600160a060020a0316ff5b6001546040805160e360020a631127a41d02815290516100ae92600160a060020a03169163893d20e891600482810192602092919082900301816000876161da5a03f1156100025750506040515133600160a060020a03908116911614905061054c5761054a565b6104196004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104b25780601f10610487576101008083540402835291602001916104b2565b6103fc6000546101009004600160a060020a0316610114565b6103ea60043560015460009033600160a060020a039081169116146104ba576104ca565b6103ea60005460ff1681565b6103ea6000600260005060405180828054600181600116156101000203166002900480156104f15780601f106104cf5761010080835404028352918201916104f1565b6001546040805160e360020a631127a41d02815290516100ae92600160a060020a03169163893d20e891600482810192602092919082900301816000876161da5a03f1156100025750506040515133600160a060020a03908116911614905061055d5761054a565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156104795780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b820191906000526020600020905b81548152906001019060200180831161049557829003601f168201915b505050505081565b506000805460ff19168217905560015b919050565b820191906000526020600020905b8154815290600101906020018083116104dd575b505091505060405180910390209050610114565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b50505050509050610114565b6000805460ff191660011790555b565b60008054600260ff19909116179055565b6000805460ff1916600317905556",
    unlinked_binary: "60606040524260036000505560405161080c38038061080c833981516080805160a0805190850160405260048587019081527f6e616d6500000000000000000000000000000000000000000000000000000000939095019283526000805460ff1990811682556002805481845295519091166008178155948701969295919092019390926100dc907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace602061010060018416150260001901909216849004601f01919091048101905b808211156101b457600081556001016100c8565b50506000805461010060a860020a0319163361010002179081905560018054600160a060020a03191683179081905560408051600160a060020a03308116825260ff949094166020820152919092168183015290517f02341e2d1bb4aad6cc87f66d24928a0f204b5c0d0230234b34526a29f98bb79d9181900360600190a150508260026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101b857805160ff19168380011785555b506101e89291506100c8565b5090565b828001600101855582156101a8579182015b828111156101a85782518260005055916020019190600101906101ca565b50508060046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061024157805160ff19168380011785555b506102719291506100c8565b82800160010185558215610235579182015b82811115610235578251826000505591602001919060010190610253565b50506000805460ff1916905560018054600160a060020a0319168317905550505061056c806102a06000396000f3606060405236156100ae5760e060020a600035046315dae03e81146100b0578063169674071461010457806317d7de7c146101175780631865c57d1461017e5780631f741c7a1461018c5780632852b71c1461019557806341c0e1b5146101fd5780634dc415de146102305780636e94fadc14610298578063893d20e8146102f6578063a9e966b71461030f578063c19d93fb14610333578063e102d9501461033f578063e6400bbe14610382575b005b6103ea600073__UserType______________________________63361a4eb86040518160e060020a0281526004018090506020604051808303818660325a03f4156100025750506040515191506101149050565b6103fc600154600160a060020a03165b90565b6104196040805160208181018352600082528251600280546001811615610100026000190116819004601f810184900484028301840190955284825292939092918301828280156105305780601f1061050557610100808354040283529160200191610530565b6103ea60005460ff16610114565b6103ea60035481565b6001546040805160e360020a631127a41d02815290516100ae92600160a060020a03169163893d20e891600482810192602092919082900301816000876161da5a03f1156100025750506040515133600160a060020a03908116911614905061053c5761054a565b6100ae6000546101009004600160a060020a0390811633909116141561054a576000546101009004600160a060020a0316ff5b6001546040805160e360020a631127a41d02815290516100ae92600160a060020a03169163893d20e891600482810192602092919082900301816000876161da5a03f1156100025750506040515133600160a060020a03908116911614905061054c5761054a565b6104196004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104b25780601f10610487576101008083540402835291602001916104b2565b6103fc6000546101009004600160a060020a0316610114565b6103ea60043560015460009033600160a060020a039081169116146104ba576104ca565b6103ea60005460ff1681565b6103ea6000600260005060405180828054600181600116156101000203166002900480156104f15780601f106104cf5761010080835404028352918201916104f1565b6001546040805160e360020a631127a41d02815290516100ae92600160a060020a03169163893d20e891600482810192602092919082900301816000876161da5a03f1156100025750506040515133600160a060020a03908116911614905061055d5761054a565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156104795780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b820191906000526020600020905b81548152906001019060200180831161049557829003601f168201915b505050505081565b506000805460ff19168217905560015b919050565b820191906000526020600020905b8154815290600101906020018083116104dd575b505091505060405180910390209050610114565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b50505050509050610114565b6000805460ff191660011790555b565b60008054600260ff19909116179055565b6000805460ff1916600317905556",
    address: "0x9e008b0eb2252e15d5bc458cfdcba9b8478c3e24",
    generated_with: "2.0.6",
    contract_name: "Party"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Party = Contract;
  }

})();
