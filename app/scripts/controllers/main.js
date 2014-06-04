'use strict';

angular.module('plenticficTestApp')
  .controller('DepositCtrl', function ($scope, depositCalulator) {
    $scope.submit = function(data){
      $scope.deposit = data;

      $scope.deposit.amount = ($scope.deposit.targethouseprice / 100) * $scope.deposit.percent;

      $scope.deposit.stampDuty = depositCalulator.getStampDuty($scope.deposit.targethouseprice);
    };
  });
