"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Party = (function (_Pudding) {
    _inherits(Party, _Pudding);

    function Party() {
      _classCallCheck(this, Party);

      _get(Object.getPrototypeOf(Party.prototype), "constructor", this).apply(this, arguments);
    }

    return Party;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Party.abi = [{ "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "certificates", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [], "name": "expel", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "accept", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "certificate", "type": "address" }], "name": "createCertificate", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "reject", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "contactDetails", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_state", "type": "uint256" }], "name": "changeState", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "authority", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "suspend", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "administrator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "_authority", "type": "address" }, { "name": "_name", "type": "string" }, { "name": "_contactDetails", "type": "string" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "state", "type": "User.State" }, { "indexed": false, "name": "administrator", "type": "address" }], "name": "UserStateChanged", "type": "event" }];
  Party.binary = "606060408190526000805461010060a860020a03191633610100021790554260035561075c3881900390819083398101604052805160805160a0519192908101910160408051808201909152600481527f6e616d6500000000000000000000000000000000000000000000000000000000602082015260006000805460ff191681558251600280549281905291602060018216156101000260001901909116839004601f9081018290047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101939290919087019083901061010557805160ff19168380011785555b506101359291505b8082111561022957600081556001016100f1565b828001600101855582156100e9579182015b828111156100e9578251826000505591602001919060010190610117565b505060018054600160a060020a03191682179081905560005460408051600160a060020a03308116825260ff9390931660208201529290911682820152517f02341e2d1bb4aad6cc87f66d24928a0f204b5c0d0230234b34526a29f98bb79d9181900360600190a1505060078054600160a060020a0319168417905581516005805460008290529091602060026001841615610100026000190190931692909204601f9081018390047f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db09081019390919087019083901061022d57805160ff19168380011785555b5061025d9291506100f1565b5090565b8280016001018555821561021d579182015b8281111561021d57825182600050559160200191906001019061023f565b50508060066000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102b657805160ff19168380011785555b506102e69291506100f1565b828001600101855582156102aa579182015b828111156102aa5782518260005055916020019190600101906102c8565b5050505050610463806102f96000396000f3606060405236156100b85760e060020a600035046216e52681146100ba57806306fdde03146100db5780632439e322146101395780632852b71c1461015b57806329027aec1461017d57806341c0e1b51461019d5780634dc415de146101d05780636e94fadc146101f25780638da5cb5b14610250578063b00741cb14610267578063bf7e214f1461028c578063c19d93fb1461029e578063d8270dce146102aa578063e6400bbe146102b3578063f53d0a8e146102d5575b005b610180600435600860205260009081526040902054600160a060020a031681565b6040805160058054602060026001831615610100026000190190921691909104601f81018290048202840182019094528383526102e793908301828280156104125780601f106103e757610100808354040283529160200191610412565b610355600154600090600160a060020a0390811633909116146103d0576103a3565b610355600154600090600160a060020a039081163390911614610391576103a3565b60005b60408051600160a060020a03929092168252519081900360200190f35b6100b86000546101009004600160a060020a039081163390911614156103e5576000546101009004600160a060020a0316ff5b610355600154600090600160a060020a0390811633909116146103a6576103a3565b6102e76006805460408051602060026000196001861615610100020190941693909304601f810184900484028201840190925281815292918301828280156104125780601f106103e757610100808354040283529160200191610412565b6101806000546101009004600160a060020a031681565b610355600435600154600090600160a060020a03908116339091161461037d57610378565b610180600754600160a060020a031681565b61035560045460ff1681565b61035560035481565b610355600154600090600160a060020a0390811633909116146103bb576103a3565b610180600154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b6000805460ff191690911790555060015b919050565b610367826000816000141561041a57610378565b506000805460ff191660019081179091555b90565b506000805460ff1916600217905560016103a3565b506000805460ff1916600317905560016103a3565b506000805460ff1916600417905560016103a3565b565b820191906000526020600020905b8154815290600101906020018083116103f557829003601f168201915b505050505081565b816001141561042b57506001610378565b816002141561043c57506002610378565b816003141561044d57506003610378565b816004141561045e57506004610378565b61000256";

  if ("" != "") {
    Party.address = "";

    // Backward compatibility; Deprecated.
    Party.deployed_address = "";
  }

  Party.generated_with = "1.0.3";
  Party.contract_name = "Party";

  return Party;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Party = factory;
}