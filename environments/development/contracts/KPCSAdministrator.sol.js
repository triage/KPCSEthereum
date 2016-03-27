"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var KPCSAdministrator = (function (_Pudding) {
    _inherits(KPCSAdministrator, _Pudding);

    function KPCSAdministrator() {
      _classCallCheck(this, KPCSAdministrator);

      _get(Object.getPrototypeOf(KPCSAdministrator.prototype), "constructor", this).apply(this, arguments);
    }

    return KPCSAdministrator;
  })(Pudding);

  ;

  // Set up specific data for this class.
  KPCSAdministrator.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "applicant", "type": "address" }], "name": "acceptUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "suspendUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "expel", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "accept", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "reject", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "rejectUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "expelUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_state", "type": "uint256" }], "name": "changeState", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": false, "inputs": [], "name": "createParticipant", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "suspend", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "administrator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "administrator", "type": "address" }], "name": "UserStateChanged", "type": "event" }];
  KPCSAdministrator.binary = "606060408190526000805461010060a860020a03191633610100021790554260035561087a388190039081908339810160405280510160408051808201909152600481527f6e616d65000000000000000000000000000000000000000000000000000000006020820152600060408051808201909152600481527f6e616d6500000000000000000000000000000000000000000000000000000000602082015260006000805460ff191681558251600280549281905291602060018216156101000260001901909116839004601f9081018290047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101939290919087019083901061012f57805160ff19168380011785555b5061015f9291505b80821115610214576000815560010161011b565b82800160010185558215610113579182015b82811115610113578251826000505591602001919060010190610141565b505060018054600160a060020a03191682179081905560408051600160a060020a03308116825292909216602083015280517fff571187adf88b25d768cf4e8d1ec5e15401ab411753a7315f5cbfee894365da9281900390910190a150508160056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021857805160ff19168380011785555b5061024892915061011b565b5090565b82800160010185558215610208579182015b8281111561020857825182600050559160200191906001019061022a565b505060048054600160a060020a03199081163317909155600180549091168217905550508060056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102c357805160ff19168380011785555b506102f392915061011b565b828001600101855582156102b7579182015b828111156102b75782518260005055916020019190600101906102d5565b505060048054600160a060020a0319163317905550610564806103166000396000f3606060405236156100c45760e060020a600035046306fdde0381146100c657806308bdc24d146101245780631e153acb146101495780632439e3221461016e5780632852b71c1461019057806341c0e1b5146101b25780634dc415de146101db5780634dc92885146101fd5780634e2a590c146102225780638da5cb5b14610247578063b00741cb14610259578063c19d93fb1461027e578063d34b2c981461028a578063d8270dce14610290578063e6400bbe14610299578063f53d0a8e146102bb575b005b6040805160058054602060026001831615610100026000190190921691909104601f81018290048202840182019094528383526102cd93908301828280156104135780601f106103e857610100808354040283529160200191610413565b61033b600435600454600090600160a060020a03908116339091161461041b5761037b565b61033b600435600454600090600160a060020a03908116339091161461049b5761037b565b61033b600154600090600160a060020a0390811633909116146103d3576103a6565b61033b600154600090600160a060020a039081163390911614610394576103a6565b6100c4600454600160a060020a0390811633909116141561028e57600454600160a060020a0316ff5b61033b600154600090600160a060020a0390811633909116146103a9576103a6565b61033b600435600454600090600160a060020a03908116339091161461045b5761037b565b61033b600435600454600090600160a060020a0390811633909116146104db5761037b565b61034d600454600160a060020a031681565b61033b600435600154600090600160a060020a0390811633909116146103805761037b565b61033b60005460ff1681565b6100c45b565b61033b60035481565b61033b600154600090600160a060020a0390811633909116146103be576103a6565b61034d600154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b6000805460ff191690911790555060015b919050565b61036a826000816000141561051b5761037b565b506000805460ff191660019081179091555b90565b506000805460ff1916600217905560016103a6565b506000805460ff1916600317905560016103a6565b506000805460ff1916600417905560016103a6565b820191906000526020600020905b8154815290600101906020018083116103f657829003601f168201915b505050505081565b81600160a060020a0316632852b71c6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316634dc415de6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a031663e6400bbe6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316632439e3226040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b816001141561052c5750600161037b565b816002141561053d5750600261037b565b816003141561054e5750600361037b565b816004141561055f5750600461037b565b61000256";

  if ("" != "") {
    KPCSAdministrator.address = "";

    // Backward compatibility; Deprecated.
    KPCSAdministrator.deployed_address = "";
  }

  KPCSAdministrator.generated_with = "1.0.3";
  KPCSAdministrator.contract_name = "KPCSAdministrator";

  return KPCSAdministrator;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.KPCSAdministrator = factory;
}