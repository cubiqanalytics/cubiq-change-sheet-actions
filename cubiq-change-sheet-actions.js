define([
    'jquery',
    './config',
    './properties',
    './actions',
    'css!./css/cubiq-change-sheet-actions.css'
],
    function ($, config, properties, actions, css) {
        'use strict';
        return {
            definition:
            {
                type: 'items',
                component: 'accordion',
                items: {
                    section: properties.sheetSection,
                    about: properties.about
                }
            },
            controller: ['$scope', '$element', function ($scope, $element) {
                // add class that hides the border when object is not active in edit mode
                // it is not possible to make this kind of selector in css
                $element.closest('.qv-gridcell').addClass('qv-gridcell-cubiq-change-sheet-actions');
                $scope.init = function () {
                    actions.act(config.actions.ENTER, $scope.layout.actions);
                };
                $scope.$on('$destroy', function (e) {
                    actions.act(config.actions.LEAVE, $scope.layout.actions);
                });
                $scope.init();

            }]
        };
    });

