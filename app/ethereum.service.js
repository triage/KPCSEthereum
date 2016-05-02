(function() {
    'use strict';

    angular.module('kpcs').service('ethereum', ethereum);

    /* @ngInject */
    function ethereum() {
      var service = {
        web3: new Web3(),
        isConnected: isConnected
      };

      activate();

      return service;

      ///////////////////

      function activate() {
        service.web3.setProvider(new service.web3.providers.HttpProvider("http://localhost:8545"));
      }

      function isConnected() {
        return service.web3.currentProvider.isConnected();
      }
    }
})();
