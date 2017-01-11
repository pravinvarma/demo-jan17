(function () {

    'use strict';

    angular.module('inputModule').
    directive('accountNumber', inputDirectiveFunction)
    .directive('mobileNumber', inputDirectiveFunction)
    .directive('inValidMessage', validationMessageFunction)
    .directive('emptyMessage', validationMessageFunction);

    function inputDirectiveFunction() {
        return {
            restrict: 'E',
            templateUrl: '../directive-templates/input-component-template.html',
            transclude: true,
            scope: {
                fieldId: '@fieldId',
                fieldLabel: '@label',
                fieldLimit: '=maxLimit',
                isFieldRequired: '@isRequired',
                placeHolder: '@placeHolder',
                fieldPattern: '@pattern',
                emptyMessage: '@emptyMessage',
                inValidMessage: '@invalidMessage',
                name: '@name',
                ngModel: '@model'
            }
        };
    }

    function validationMessageFunction() {
        return {
            controller: 'inputComponentController',
            controllerAs: 'vm',
            link: function (scope, el, attr) {
                if(el[0].tagName === 'ACCOUNT-NUMBER')
                scope.invalidMessageAccount = attr.invalidMessage;
                
                if(el[0].tagName === 'MOBILE-NUMBER')
                scope.invalidMessageMobile = attr.invalidMessage;

            }

        };


    }

})();