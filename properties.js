define(['./actions', './config', './about'], function (actions, config, about) {
    'use strict';
    let items = {
        type: 'array',
        ref: 'actions',
        label: 'Actions',
        itemTitleRef: 'description',
        allowAdd: true,
        allowRemove: true,
        allowMove: true,
        addTranslation: 'Add action', items: {
            description: {
                type: 'string', ref: 'description', label: 'Description'
            },
            actionTrigger: {
                type: 'integer',
                component: 'dropdown',
                label: 'Trigger',
                ref: 'actionTrigger',
                options: [{
                    value: config.actions.ENTER,
                    label: 'On Enter Sheet'
                }, {
                    value: config.actions.LEAVE,
                    label: 'On Leave Sheet'
                }]
            },
            actionType: {
                type: 'integer',
                component: 'dropdown',
                label: 'Action type',
                ref: 'actionType',
                options: [{
                    value: config.types.SELECT_FIELD,
                    label: 'Select Value In Field'
                }, {
                    value: config.types.CLEAR_FIELD,
                    label: 'Clear Field'
                }, {
                    value: config.types.CLEAR_ALL_FIELDS,
                    label: 'Clear All Fields'
                }, {
                    value: config.types.SET_VARIABLE,
                    label: 'Set Variable'
                }, {
                    value: config.types.APPLY_BOOKMARK,
                    label: 'Apply Bookmark'
                }]
            },
            target: {
                type: 'string', ref: 'target', label: 'Target', expression: 'optional',
                show: function (data) {
                    return data.actionType === config.types.SELECT_FIELD
                        || data.actionType === config.types.CLEAR_FIELD
                        || data.actionType === config.types.SET_VARIABLE;
                }
            },
            expression: {
                type: 'string', ref: 'expression', label: 'Expression', expression: 'always',
                show: function (data) {
                    return data.actionType === config.types.SELECT_FIELD
                        || data.actionType === config.types.SET_VARIABLE;
                }
            },
            bookmark: {
                type: 'string',
                component: 'dropdown',
                label: 'Bookmark',
                ref: 'bookmark',
                options: function () {
                    return actions.getBookmarkList().then(function (items) {
                        return items;
                    });
                },
                show: function (data) {
                    return data.actionType === config.types.APPLY_BOOKMARK;
                }
            }
        }
    };
    let section = {
        type: "items",
        component: 'expandable-items',
        label: 'Sheet',
        items: {
            actions: items
        }
    };

    return {
        sheetSection: section,
        about: {
            label: "Cubiq Analytics Oy", type: "items", items: {
                about: {
                    component: "cubiq-change-sheet-actions-about", show: true
                }
            }
        }
    };

});
