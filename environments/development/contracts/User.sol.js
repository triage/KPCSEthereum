"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var User = (function (_Pudding) {
    _inherits(User, _Pudding);

    function User() {
      _classCallCheck(this, User);

      _get(Object.getPrototypeOf(User.prototype), "constructor", this).apply(this, arguments);
    }

    return User;
  })(Pudding);

  ;

  // Set up specific data for this class.
  User.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [], "name": "expel", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "accept", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "reject", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_state", "type": "uint256" }], "name": "changeState", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "suspend", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "administrator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }, { "name": "_administrator", "type": "address" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "administrator", "type": "address" }], "name": "UserStateChanged", "type": "event" }];
  User.binary = "606060408190526000805461010060a860020a031916336101000217905542600355610525388190039081908339810160405280516080519101906000600060006101000a81548160ff021916908302179055508160026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100ba57805160ff19168380011785555b506100ea9291505b8082111561018057600081556001016100a6565b8280016001018555821561009e579182015b8281111561009e5782518260005055916020019190600101906100cc565b505080600160006101000a815481600160a060020a03021916908302179055507fff571187adf88b25d768cf4e8d1ec5e15401ab411753a7315f5cbfee894365da30600160009054906101000a9004600160a060020a03166040518083600160a060020a0316815260200182600160a060020a031681526020019250505060405180910390a150506103a1806101846000396000f35b5090566060604052361561008d5760e060020a600035046306fdde03811461008f5780632439e322146100ea5780632852b71c1461010c57806341c0e1b51461012e5780634dc415de146101615780638da5cb5b14610183578063b00741cb1461019a578063c19d93fb146101bf578063d8270dce146101cb578063e6400bbe146101d4578063f53d0a8e146101f6575b005b6040805160028054602060018216156101000260001901909116829004601f810182900482028401820190945283835261020893908301828280156102d05780601f106102a5576101008083540402835291602001916102d0565b610276600154600090600160a060020a03908116339091161461034157610314565b610276600154600090600160a060020a03908116339091161461030257610314565b61008d6000546101009004600160a060020a03908116339091161415610356576000546101009004600160a060020a0316ff5b610276600154600090600160a060020a03908116339091161461031757610314565b6102886000546101009004600160a060020a031681565b610276600435600154600090600160a060020a0390811633909116146102ee576102e9565b61027660005460ff1681565b61027660035481565b610276600154600090600160a060020a03908116339091161461032c57610314565b610288600154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102685780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b820191906000526020600020905b8154815290600101906020018083116102b357829003601f168201915b505050505081565b6000805460ff191690911790555060015b919050565b6102d88260008160001415610358576102e9565b506000805460ff191660019081179091555b90565b506000805460ff191660021790556001610314565b506000805460ff191660031790556001610314565b506000805460ff191660041790556001610314565b565b8160011415610369575060016102e9565b816002141561037a575060026102e9565b816003141561038b575060036102e9565b816004141561039c575060046102e9565b61000256";

  if ("" != "") {
    User.address = "";

    // Backward compatibility; Deprecated.
    User.deployed_address = "";
  }

  User.generated_with = "1.0.3";
  User.contract_name = "User";

  return User;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.User = factory;
}