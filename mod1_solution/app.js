(function(){
  'use strict';
  angular.module('lunchBox', [])
  .controller('lbChecker', lbChecker);
  lbChecker.$inject = ['$scope'];



var currResult = "";
var currColor = "black";
function lbChecker($scope) {
    $scope.getColor = function() {
      return currColor;
    };
    $scope.lunchOrder = "";
    $scope.showResult = showResult;
    $scope.checkNow = function() {
      var res = checkOrder($scope.lunchOrder);
      currResult = res.msg;
      currColor = res.color;
    }
}


function checkOrder(string) {
    var count = countItems(string);

    if (count === 0) {
      return {msg :"Please enter data first", color: "red"};
    }

    var m = (count > 3) ? "Too much!" : "Enjoy!";
    var c = (count > 3) ? "orange" : "green";
    return {msg :m, color: c};
}

function countItems(string) {
  // remove any whitespace
  var cleanStr = string.replace(/\s/g, "");
  var count = 0;
  var ix;
  var items = cleanStr.split(',');
  console.log(items);
  for (ix in items) {
    console.log(items[ix]);
    if (items[ix] !== "") {
      count = count + 1;
    }
    console.log(count);
  }

  return count;
}

function showResult() {
    return currResult;
  }

})();
