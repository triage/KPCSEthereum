"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Participant = (function (_Pudding) {
    _inherits(Participant, _Pudding);

    function Participant() {
      _classCallCheck(this, Participant);

      _get(Object.getPrototypeOf(Participant.prototype), "constructor", this).apply(this, arguments);
    }

    return Participant;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Participant.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "applicant", "type": "address" }], "name": "acceptUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "suspendUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "status", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": false, "inputs": [], "name": "expel", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "accept", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "authorities", "outputs": [{ "name": "importing", "type": "address" }, { "name": "exporting", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "reject", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "rejectUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "expelUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_state", "type": "uint256" }], "name": "changeState", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "suspend", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_status", "type": "uint256" }], "name": "changeStatus", "outputs": [{ "name": "changed", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "administrator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }, { "name": "_administrator", "type": "address" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "participant", "type": "Participant" }, { "indexed": false, "name": "administrator", "type": "KPCSAdministrator" }], "name": "Created", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "administrator", "type": "address" }], "name": "UserStateChanged", "type": "event" }];
  Participant.binary = "606060408190526000805461010060a860020a0319163361010002179055426003556109563881900390819083398101604052805160805191019060408051808201909152600481527f6e616d65000000000000000000000000000000000000000000000000000000006020820152600060408051808201909152600481527f6e616d6500000000000000000000000000000000000000000000000000000000602082015260006000805460ff191681558251600280549281905291602060018216156101000260001901909116839004601f9081018290047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101939290919087019083901061013457805160ff19168380011785555b506101649291505b808211156102195760008155600101610120565b82800160010185558215610118579182015b82811115610118578251826000505591602001919060010190610146565b505060018054600160a060020a03191682179081905560408051600160a060020a03308116825292909216602083015280517fff571187adf88b25d768cf4e8d1ec5e15401ab411753a7315f5cbfee894365da9281900390910190a150508160056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021d57805160ff19168380011785555b5061024d929150610120565b5090565b8280016001018555821561020d579182015b8281111561020d57825182600050559160200191906001019061022f565b505060048054600160a060020a03199081163317909155600180549091168217905550508160076000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102c857805160ff19168380011785555b506102f8929150610120565b828001600101855582156102bc579182015b828111156102bc5782518260005055916020019190600101906102da565b505060088054600160a060020a03191682179055505061063a8061031c6000396000f3606060405236156100da5760e060020a600035046306fdde0381146100dc57806308bdc24d1461013a5780631e153acb1461015f578063200d2ed2146101845780632439e322146101905780632852b71c146101b25780632b0d1816146101d457806341c0e1b5146101ed5780634dc415de146102165780634dc92885146102385780634e2a590c1461025d5780638da5cb5b14610282578063b00741cb14610294578063c19d93fb146102b9578063d8270dce146102c5578063e6400bbe146102ce578063e8025d77146102f0578063f53d0a8e14610315575b005b6040805160078054602060026001831615610100026000190190921691909104601f8101829004820284018201909452838352610327939083018282801561059e5780601f106105735761010080835404028352916020019161059e565b610395600435600454600090600160a060020a03908116339091161461047157610404565b610395600435600454600090600160a060020a0390811633909116146104f157610404565b61039560065460ff1681565b610395600154600090600160a060020a03908116339091161461045c5761042f565b610395600154600090600160a060020a03908116339091161461041d5761042f565b6103a7600954600a54600160a060020a03918216911682565b6100da600454600160a060020a0390811633909116141561057157600454600160a060020a0316ff5b610395600154600090600160a060020a0390811633909116146104325761042f565b610395600435600454600090600160a060020a0390811633909116146104b157610404565b610395600435600454600090600160a060020a03908116339091161461053157610404565b6103d6600454600160a060020a031681565b610395600435600154600090600160a060020a03908116339091161461040957610404565b61039560005460ff1681565b61039560035481565b610395600154600090600160a060020a0390811633909116146104475761042f565b610395600435600454600090600160a060020a0390811633909116146105a657610404565b6103d6600854600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b6040518083600160a060020a0316815260200182600160a060020a031681526020019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b6000805460ff191690911790555060015b919050565b6103f382600081600014156105cf57610404565b506000805460ff191660019081179091555b90565b506000805460ff19166002179055600161042f565b506000805460ff19166003179055600161042f565b506000805460ff19166004179055600161042f565b81600160a060020a0316632852b71c6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316634dc415de6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a031663e6400bbe6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316632439e3226040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b565b820191906000526020600020905b81548152906001019060200180831161058157829003601f168201915b505050505081565b6105ba826000816000141561061857610404565b6006805460ff19169091179055506001610404565b81600114156105e057506001610404565b81600214156105f157506002610404565b816003141561060257506003610404565b816004141561061357506004610404565b610002565b816001141561062957506001610404565b81600214156106135750600261040456";

  if ("" != "") {
    Participant.address = "";

    // Backward compatibility; Deprecated.
    Participant.deployed_address = "";
  }

  Participant.generated_with = "1.0.3";
  Participant.contract_name = "Participant";

  return Participant;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Participant = factory;
}