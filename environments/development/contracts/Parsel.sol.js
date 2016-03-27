"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Parsel = (function (_Pudding) {
    _inherits(Parsel, _Pudding);

    function Parsel() {
      _classCallCheck(this, Parsel);

      _get(Object.getPrototypeOf(Parsel.prototype), "constructor", this).apply(this, arguments);
    }

    return Parsel;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Parsel.abi = [{ "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "origins", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "value", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "carats", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [{ "name": "_carats", "type": "string" }, { "name": "_value", "type": "string" }, { "name": "_origins", "type": "address[]" }], "type": "constructor" }];
  Parsel.binary = "606060405260405161044038038061044083398101604052805160805160a0519183019290810191018260006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b457805160ff19168380011785555b506100e49291505b8082111561013d576000815560010161007b565b505060038054600160a060020a031916331790555050506102358061020b6000396000f35b82800160010185558215610073579182015b828111156100735782518260005055916020019190600101906100c6565b50508160016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014157805160ff19168380011785555b5061017192915061007b565b5090565b82800160010185558215610131579182015b82811115610131578251826000505591602001919060010190610153565b5050805160028054828255600082905290917f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace918201916020850182156101e5579160200282015b828111156101e55782518254600160a060020a03191617825560209290920191600191909101906101b9565b5061008f9291505b8082111561013d578054600160a060020a03191681556001016101ed56606060405260e060020a60003504630885878b81146100475780633fa4f2451461008d57806341c0e1b5146100e957806389d5fe91146101115780638da5cb5b1461016d575b005b61017f60043560028054829081101561000257506000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0154600160a060020a031681565b610192600180546020600282841615610100026000190190921691909104601f8101829004909102608090810160405260608281529291908282801561022b5780601f106102005761010080835404028352916020019161022b565b61004560035433600160a060020a039081169116141561023357600354600160a060020a0316ff5b610192600080546020601f6002600019600185161561010002019093169290920491820181900402608090810160405260608281529291908282801561022b5780601f106102005761010080835404028352916020019161022b565b61017f600354600160a060020a031681565b600160a060020a03166060908152602090f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101f25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b820191906000526020600020905b81548152906001019060200180831161020e57829003601f168201915b505050505081565b56";

  if ("" != "") {
    Parsel.address = "";

    // Backward compatibility; Deprecated.
    Parsel.deployed_address = "";
  }

  Parsel.generated_with = "1.0.3";
  Parsel.contract_name = "Parsel";

  return Parsel;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Parsel = factory;
}