"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var ParticipantAgent = (function (_Pudding) {
    _inherits(ParticipantAgent, _Pudding);

    function ParticipantAgent() {
      _classCallCheck(this, ParticipantAgent);

      _get(Object.getPrototypeOf(ParticipantAgent.prototype), "constructor", this).apply(this, arguments);
    }

    return ParticipantAgent;
  })(Pudding);

  ;

  // Set up specific data for this class.
  ParticipantAgent.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "applicant", "type": "address" }], "name": "acceptUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "suspendUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "dateCreated", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "expel", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_certificate", "type": "address" }], "name": "signCertificate", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "accept", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "reject", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "rejectUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "user", "type": "address" }], "name": "expelUser", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_state", "type": "uint256" }], "name": "changeState", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": true, "inputs": [], "name": "creationTime", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "suspend", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "administrator", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }, { "name": "_administrator", "type": "address" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "administrator", "type": "address" }], "name": "UserStateChanged", "type": "event" }];
  ParticipantAgent.binary = "606060408190526000805461010060a860020a03191633610100021790554260038190556007556108e33881900390819083398101604052805160805191019060408051808201909152600481527f6e616d65000000000000000000000000000000000000000000000000000000006020820152600060408051808201909152600481527f6e616d6500000000000000000000000000000000000000000000000000000000602082015260006000805460ff191681558251600280549281905291602060018216156101000260001901909116839004601f9081018290047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101939290919087019083901061013957805160ff19168380011785555b506101699291505b8082111561021e5760008155600101610125565b8280016001018555821561011d579182015b8281111561011d57825182600050559160200191906001019061014b565b505060018054600160a060020a03191682179081905560408051600160a060020a03308116825292909216602083015280517fff571187adf88b25d768cf4e8d1ec5e15401ab411753a7315f5cbfee894365da9281900390910190a150508160056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061022257805160ff19168380011785555b50610252929150610125565b5090565b82800160010185558215610212579182015b82811115610212578251826000505591602001919060010190610234565b505060048054600160a060020a031990811633179091556001805490911682179055505060088054600160a060020a0319168217905581516006805460008290529091602060026001841615610100026000190190931692909204601f9081018390047ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f9081019390919087019083901061030057805160ff19168380011785555b50610330929150610125565b828001600101855582156102f4579182015b828111156102f4578251826000505591602001919060010190610312565b505050506105a1806103426000396000f3606060405236156100cf5760e060020a600035046306fdde0381146100d157806308bdc24d1461012f5780631e153acb146101545780631f741c7a146101795780632439e322146101825780632781e016146101a45780632852b71c146101c957806341c0e1b5146101eb5780634dc415de146102145780634dc92885146102365780634e2a590c1461025b5780638da5cb5b14610280578063b00741cb14610292578063c19d93fb146102b7578063d8270dce146102c3578063e6400bbe146102cc578063f53d0a8e146102ee575b005b6040805160068054602060026001831615610100026000190190921691909104601f810182900482028401820190945283835261030093908301828280156105485780601f1061051d57610100808354040283529160200191610548565b61036e600435600454600090600160a060020a03908116339091161461041b576103ae565b61036e600435600454600090600160a060020a03908116339091161461049b576103ae565b61036e60075481565b61036e600154600090600160a060020a039081163390911614610406576103d9565b61036e600435600454600090600160a060020a039081163390911614610550576103ae565b61036e600154600090600160a060020a0390811633909116146103c7576103d9565b6100cf600454600160a060020a0390811633909116141561051b57600454600160a060020a0316ff5b61036e600154600090600160a060020a0390811633909116146103dc576103d9565b61036e600435600454600090600160a060020a03908116339091161461045b576103ae565b61036e600435600454600090600160a060020a0390811633909116146104db576103ae565b610380600454600160a060020a031681565b61036e600435600154600090600160a060020a0390811633909116146103b3576103ae565b61036e60005460ff1681565b61036e60035481565b61036e600154600090600160a060020a0390811633909116146103f1576103d9565b610380600854600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103605780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b6000805460ff191690911790555060015b919050565b61039d8260008160001415610558576103ae565b506000805460ff191660019081179091555b90565b506000805460ff1916600217905560016103d9565b506000805460ff1916600317905560016103d9565b506000805460ff1916600417905560016103d9565b81600160a060020a0316632852b71c6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316634dc415de6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a031663e6400bbe6040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b81600160a060020a0316632439e3226040518160e060020a0281526004018090506020604051808303816000876161da5a03f11561000257505050919050565b565b820191906000526020600020905b81548152906001019060200180831161052b57829003601f168201915b505050505081565b5060016103ae565b8160011415610569575060016103ae565b816002141561057a575060026103ae565b816003141561058b575060036103ae565b816004141561059c575060046103ae565b61000256";

  if ("" != "") {
    ParticipantAgent.address = "";

    // Backward compatibility; Deprecated.
    ParticipantAgent.deployed_address = "";
  }

  ParticipantAgent.generated_with = "1.0.3";
  ParticipantAgent.contract_name = "ParticipantAgent";

  return ParticipantAgent;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.ParticipantAgent = factory;
}