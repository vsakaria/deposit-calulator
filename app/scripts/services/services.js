'use strict';

angular.module('plenticficTestApp')
  .factory('depositCalulator', function(){

    var stampDutyBands = {
      '125000': '0',
      '250000': '1',
      '500000': '3',
      '1000000': '4',
      '2000000': '5',
      '12000000': '7'
    };

    return {
      getStampDuty: function(targetHousePrice){
        var result = _.pick(stampDutyBands, function(value, key){
          if(targetHousePrice <= key){ return key; }
        });
        return result[Object.keys(result)[0]];
      }
    };
  });
