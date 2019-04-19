var app = angular.module('test', []);

app.controller('ctrl', ['$scope', 'editDialog', function ($scope, editDialog) {
  $scope.editDialog = editDialog;
  
  $scope.persons = [{name: 'John'}, {name: 'Barbara'}];
  
  $scope.add = function() {
    $scope.persons.push({name: 'New Person'});
  };
}]);

app.factory('editDialog', ['$rootScope', '$compile', '$window', function($rootScope, $compile, $window) {
    var html = '<edit-person person="person"></edit-person>';
    var link = $compile(html); // note that compilation happens only once
       
    return {
      open: function(person) {
        var scope = $rootScope.$new(true);
        scope.person = person;
       
        var w = $window.open('', '_blank', 'toolbar=0,width=300,height=200');
        
        // using a cloneAttachFunction, cf. the docs and http://stackoverflow.com/questions/18064543/compile-angular-on-an-element-after-angular-compilation-has-already-happened
        link(scope, function(cloned, scope) {
          angular.element(w.document.body).append(cloned);
        });
      }
   };
 }]);

app.directive('editPerson', [function() {
  return {
    restrict: 'E',
    scope: {
      person: '=',
    },
    template: '<p><input class="form-control" type="text" ng-model="person.name"></p>',
  };
}]);

