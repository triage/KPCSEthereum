"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Certificate = (function (_Pudding) {
    _inherits(Certificate, _Pudding);

    function Certificate() {
      _classCallCheck(this, Certificate);

      _get(Object.getPrototypeOf(Certificate.prototype), "constructor", this).apply(this, arguments);
    }

    return Certificate;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Certificate.abi = [{ "constant": true, "inputs": [], "name": "authorities", "outputs": [{ "name": "exporter", "type": "address" }, { "name": "importer", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "sign", "outputs": [{ "name": "signed", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "isValid", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "dates", "outputs": [{ "name": "creation", "type": "uint256" }, { "name": "issue", "type": "uint256" }, { "name": "completion", "type": "uint256" }, { "name": "expiration", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "parsels", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "signatures", "outputs": [{ "name": "importer", "type": "uint256" }, { "name": "exporter", "type": "uint256" }, { "name": "exporterAuthority", "type": "uint256" }, { "name": "importerAuthority", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "hasRequiredSignatures", "outputs": [{ "name": "isComplete", "type": "bool" }], "type": "function" }, { "inputs": [{ "name": "_importer", "type": "address" }, { "name": "_exporter", "type": "address" }, { "name": "_participantOrigin", "type": "address" }, { "name": "_participantSource", "type": "address" }, { "name": "_participantDestination", "type": "address" }, { "name": "_parsels", "type": "address[]" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "certificate", "type": "address" }], "name": "Requested", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "certificate", "type": "address" }], "name": "Issued", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "certificate", "type": "address" }], "name": "Expired", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "certificate", "type": "address" }], "name": "Exported", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "certificate", "type": "address" }], "name": "Imported", "type": "event" }];
  Certificate.binary = "6000805460a060020a60ff021916815560e06040819052426060819052608083905260a083905260c083905260015560028290556003829055600491909155610576388190039081908339810160405280516101005161012051610140516101605161018051949593949293919290910133600060006101000a815481600160a060020a030219169083021790555060406040519081016040528087815260200186815260200150600a60005060008201518160000160006101000a815481600160a060020a030219169083021790555060208201518160010160006101000a815481600160a060020a030219169083021790555090505060606040519081016040528085815260200184815260200183815260200150600560005060008201518160000160006101000a815481600160a060020a030219169083021790555060208201518160010160006101000a815481600160a060020a030219169083021790555060408201518160020160006101000a815481600160a060020a030219169083021790555090505080600c600050908051906020019082805482825590600052602060002090810192821561023d579160200282015b8281111561023d5782518254600160a060020a03191617825560209290920191600191909101906101b8565b505060008054600160a060020a03191633178155604080516080810182524280825260208201849052918101839052606001829052600d55600e819055600f81905560105550505050505061030f806102676000396000f35b506101e49291505b80821115610263578054600160a060020a0319168155600101610245565b509056606060405236156100775760e060020a60003504632b0d181681146100795780632ca15122146100925780638da5cb5b146100c0578063bb5d40eb146100d2578063c157fc72146100e9578063c19d93fb146100fb578063d5e2c0c71461010e578063f27959c714610154578063f3f443ca14610168575b005b6101a8600954600854600160a060020a03908116911682565b6101d7600854600090600160a060020a0390811633909116141561022c57600f5481901115610258576100e6565b6101e9600054600160a060020a031681565b6101d760005460a060020a900460ff166001145b90565b61020660015460025460035460045484565b6101d760005460a060020a900460ff1681565b6101e9600435600c8054829081101561000257506000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70154600160a060020a031681565b600e54600d54601054600f54610206939184565b6101d75b60105460009081901180156101835750600f548190115b80156101925750600d54600090115b80156101a15750600e54600090115b90506100e6565b6040518083600160a060020a0316815260200182600160a060020a031681526020019250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b604080519485526020850193909352838301919091526060830152519081900360800190f35b600954600160a060020a03908116339091161415610265576010546000901115610291575060006100e6565b42600f555b6102a861016c565b600b54600160a060020a0390811633909116141561029a57600d54600090111561029f575060006100e6565b4260105561025d565b610002565b42600d5561025d565b15610307576000805474ff0000000000000000000000000000000000000000191660a060020a17815560405130600160a060020a0316917fa566fc6a716182a1dc2bc8d30c98b4278f1d386554dcbbd6a0c39aaedad08c2891a26100e6565b5060016100e656";

  if ("" != "") {
    Certificate.address = "";

    // Backward compatibility; Deprecated.
    Certificate.deployed_address = "";
  }

  Certificate.generated_with = "1.0.3";
  Certificate.contract_name = "Certificate";

  return Certificate;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Certificate = factory;
}