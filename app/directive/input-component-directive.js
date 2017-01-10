(function(){
    
'use strict';
    
angular.module('inputModule').
directive('accountNumber', inputDirectiveFunction)
.directive('mobileNumber', inputDirectiveFunction);

function inputDirectiveFunction() {
  return {
  restrict:'E',  
  templateUrl: '../directive-templates/input-component-template.html',
   transclude:true,      
    scope: {
      fieldId: '@fieldId',
      fieldLabel: '@label',
      fieldLimit: '=maxLimit',
      isFieldRequired: '@isRequired',
      placeHolder: '@placeHolder',
      fieldPattern: '@pattern',
      emptyMessage: '@emptyMessage',
      inValidMessage: '@invalidMessage',
        name:'@name',
        ngModel: '@model'
    }
  }
}
})();