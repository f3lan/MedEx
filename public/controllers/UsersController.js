'use strict';

(function() {

  angular.module('MedEx').controller('UsersController', [
    '$scope',
    '$state',
    'AuthService',
    UsersController
  ]);

  function UsersController(
    $scope,
    $state,
    AuthService
  ) {

    this.login = function(user) {
      const that = this;
      AuthService.login(user).then(function(data) {
        if(data.status) {
          AuthService.setUser(true);
          $state.go('index');
          that.result = "Login successful";
        } else {
          that.result = "Login not successful";
        }
      });
    }

    this.logout = function(user) {
      AuthService.logout(user);
    }

    this.register = function(user) {
      AuthService.register(user);
    }
  }

})();
