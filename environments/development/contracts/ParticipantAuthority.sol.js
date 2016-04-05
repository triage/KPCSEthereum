"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var ParticipantAuthority = (function (_Pudding) {
    _inherits(ParticipantAuthority, _Pudding);

    function ParticipantAuthority() {
      _classCallCheck(this, ParticipantAuthority);

      _get(Object.getPrototypeOf(ParticipantAuthority.prototype), "constructor", this).apply(this, arguments);
    }

    return ParticipantAuthority;
  })(Pudding);

  ;

  // Set up specific data for this class.
  ParticipantAuthority.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "applicant", "type": "address" }], "name": "acceptUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "suspendUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "expel", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "accept", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "participant", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "reject", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "rejectUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "expelUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_state", "type": "uint256" }], "name": "changeState", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "suspend", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "administrator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "agents", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }, { "name": "_participant", "type": "address" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "state", "type": "User.State" }, { "indexed": false, "name": "administrator", "type": "address" }], "name": "UserStateChanged", "type": "event" }];
  ParticipantAuthority.binary = "606060408190526000805461010060a860020a0319163361010002179055426003556108c63881900390819083398101604052805160805191019060408051808201909152600481527f6e616d65000000000000000000000000000000000000000000000000000000006020820152600060408051808201909152600481527f6e616d6500000000000000000000000000000000000000000000000000000000602082015260006000805460ff191681558251600280549281905291602060018216156101000260001901909116839004601f9081018290047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101939290919087019083901061013457805160ff19168380011785555b506101649291505b808211156102255760008155600101610120565b82800160010185558215610118579182015b82811115610118578251826000505591602001919060010190610146565b505060018054600160a060020a03191682179081905560005460408051600160a060020a03308116825260ff9390931660208201529290911682820152517f02341e2d1bb4aad6cc87f66d24928a0f204b5c0d0230234b34526a29f98bb79d9181900360600190a150508160056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061022957805160ff19168380011785555b50610259929150610120565b5090565b82800160010185558215610219579182015b8281111561021957825182600050559160200191906001019061023b565b505060048054600160a060020a03199081163317909155600180549091168217905550508160066000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102d457805160ff19168380011785555b50610304929150610120565b828001600101855582156102c8579182015b828111156102c85782518260005055916020019190600101906102e6565b505060078054600160a060020a03191682179055505061059e806103286000396000f3606060405236156100cf5760e060020a600035046306fdde0381146100d157806308bdc24d1461012f5780631e153acb146101545780632439e322146101795780632852b71c1461019b57806337a6d42b146101bd57806341c0e1b5146101cf5780634dc415de146101f85780634dc928851461021a5780634e2a590c1461023f5780638da5cb5b14610264578063b00741cb14610276578063c19d93fb1461029b578063d8270dce146102a7578063e6400bbe146102b0578063f53d0a8e146102d2578063fd66091e146102e4575b005b6040805160068054602060026001831615610100026000190190921691909104601f8101829004820284018201909452838352610305939083018282801561054d5780601f106105225761010080835404028352916020019161054d565b610373600435600454600090600160a060020a039081163390911614610420576103b3565b610373600435600454600090600160a060020a0390811633909116146104a0576103b3565b610373600154600090600160a060020a03908116339091161461040b576103de565b610373600154600090600160a060020a0390811633909116146103cc576103de565b610385600754600160a060020a031681565b6100cf600454600160a060020a0390811633909116141561052057600454600160a060020a0316ff5b610373600154600090600160a060020a0390811633909116146103e1576103de565b610373600435600454600090600160a060020a039081163390911614610460576103b3565b610373600435600454600090600160a060020a0390811633909116146104e0576103b3565b610385600454600160a060020a031681565b610373600435600154600090600160a060020a0390811633909116146103b8576103b3565b61037360005460ff1681565b61037360035481565b610373600154600090600160a060020a0390811633909116146103f6576103de565b610385600154600160a060020a031681565b610385600435600860205260009081526040902054600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103655780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b6000805460ff191690911790555060015b919050565b6103a28260008160001415610555576103b3565b506000805460ff191660019081179091555b90565b506000805460ff1916600217905560016103de565b506000805460ff1916600317905560016103de565b506000805460ff1916600417905560016103de565b81600160a060020a0316632852b71c6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316634dc415de6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a031663e6400bbe6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316632439e3226040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505050505081565b8160011415610566575060016103b3565b8160021415610577575060026103b3565b8160031415610588575060036103b3565b8160041415610599575060046103b3565b61000256";

  if ("" != "") {
    ParticipantAuthority.address = "";

    // Backward compatibility; Deprecated.
    ParticipantAuthority.deployed_address = "";
  }

  ParticipantAuthority.generated_with = "1.0.3";
  ParticipantAuthority.contract_name = "ParticipantAuthority";

  return ParticipantAuthority;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.ParticipantAuthority = factory;
}