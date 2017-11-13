define([], function () {
    'use strict';
    return {
        actions: {
            ENTER: 1,
            LEAVE: 2
        },
        types: {
            SELECT_FIELD: 1,
            SET_VARIABLE: 2,
            CLEAR_FIELD: 3,
            CLEAR_ALL_FIELDS: 4,
            APPLY_BOOKMARK: 5
        }
    };
});