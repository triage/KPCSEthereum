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
  KPCSAdministrator.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "applicant", "type": "address" }], "name": "acceptUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "suspendUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "expel", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "accept", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "reject", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "rejectUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "expelUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_state", "type": "uint256" }], "name": "changeState", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "suspend", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "administrator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "state", "type": "User.State" }, { "indexed": false, "name": "administrator", "type": "address" }], "name": "UserStateChanged", "type": "event" }];
  KPCSAdministrator.binary = "606060408190526000805461010060a860020a031916336101000217905542600355610877388190039081908339810160405280510160408051808201909152600481527f6e616d65000000000000000000000000000000000000000000000000000000006020820152600060408051808201909152600481527f6e616d6500000000000000000000000000000000000000000000000000000000602082015260006000805460ff191681558251600280549281905291602060018216156101000260001901909116839004601f9081018290047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101939290919087019083901061012f57805160ff19168380011785555b5061015f9291505b80821115610220576000815560010161011b565b82800160010185558215610113579182015b82811115610113578251826000505591602001919060010190610141565b505060018054600160a060020a03191682179081905560005460408051600160a060020a03308116825260ff9390931660208201529290911682820152517f02341e2d1bb4aad6cc87f66d24928a0f204b5c0d0230234b34526a29f98bb79d9181900360600190a150508160056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061022457805160ff19168380011785555b5061025492915061011b565b5090565b82800160010185558215610214579182015b82811115610214578251826000505591602001919060010190610236565b505060048054600160a060020a03199081163317909155600180549091168217905550508060056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102cf57805160ff19168380011785555b506102ff92915061011b565b828001600101855582156102c3579182015b828111156102c35782518260005055916020019190600101906102e1565b505060048054600160a060020a0319163317905550610555806103226000396000f3606060405236156100b95760e060020a600035046306fdde0381146100bb57806308bdc24d146101195780631e153acb1461013e5780632439e322146101635780632852b71c1461018557806341c0e1b5146101a75780634dc415de146101d05780634dc92885146101f25780634e2a590c146102175780638da5cb5b1461023c578063b00741cb1461024e578063c19d93fb14610273578063d8270dce1461027f578063e6400bbe14610288578063f53d0a8e146102aa575b005b6040805160058054602060026001831615610100026000190190921691909104601f81018290048202840182019094528383526102bc93908301828280156104025780601f106103d757610100808354040283529160200191610402565b61032a600435600454600090600160a060020a03908116339091161461040a5761036a565b61032a600435600454600090600160a060020a03908116339091161461048a5761036a565b61032a600154600090600160a060020a0390811633909116146103c257610395565b61032a600154600090600160a060020a03908116339091161461038357610395565b6100b9600454600160a060020a0390811633909116141561050a57600454600160a060020a0316ff5b61032a600154600090600160a060020a03908116339091161461039857610395565b61032a600435600454600090600160a060020a03908116339091161461044a5761036a565b61032a600435600454600090600160a060020a0390811633909116146104ca5761036a565b61033c600454600160a060020a031681565b61032a600435600154600090600160a060020a03908116339091161461036f5761036a565b61032a60005460ff1681565b61032a60035481565b61032a600154600090600160a060020a0390811633909116146103ad57610395565b61033c600154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561031c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b6000805460ff191690911790555060015b919050565b610359826000816000141561050c5761036a565b506000805460ff191660019081179091555b90565b506000805460ff191660021790556001610395565b506000805460ff191660031790556001610395565b506000805460ff191660041790556001610395565b820191906000526020600020905b8154815290600101906020018083116103e557829003601f168201915b505050505081565b81600160a060020a0316632852b71c6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316634dc415de6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a031663e6400bbe6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316632439e3226040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b565b816001141561051d5750600161036a565b816002141561052e5750600261036a565b816003141561053f5750600361036a565b81600414156105505750600461036a565b61000256";

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