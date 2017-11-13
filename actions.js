define(['qlik', './config', "ng!$q"], function (qlik, config, $q) {
    "use strict";
    let app = qlik.currApp();
    function validate(obj) {
        if (!obj.actionTrigger || !obj.actionType) {
            return false;
        }
        if ((obj.actionType === config.types.SELECT_FIELD
            || obj.actionType === config.types.SET_VARIABLE
            || obj.actionType === config.types.CLEAR_FIELD) && !obj.target) {
            return false;
        }
        if ((obj.actionType === config.types.SELECT_FIELD
            || obj.actionType === config.types.SET_VARIABLE) && !obj.expression) {
            return false;
        }
        if (obj.actionType === config.types.APPLY_BOOKMARK && !obj.bookmark) {
            return false;
        }
        return true;
    }
    function act(trigger, actions) {
        // select actions for trigger
        //let triggerActions = actions.filter(a => a.actionTrigger === trigger);
        let triggerActions = actions.filter(function (a) { return a.actionTrigger === trigger; });
        triggerActions.forEach(function (obj) {
            let valid = validate(obj);
            if (valid) {
                switch (obj.actionType) {
                    case config.types.SELECT_FIELD:
                        selectValueInField(obj.target, obj.expression);
                        break;
                    case config.types.SET_VARIABLE:
                        setVariable(obj.target, obj.expression);
                        break;
                    case config.types.CLEAR_FIELD:
                        clearField(obj.target);
                        break;
                    case config.types.CLEAR_ALL_FIELDS:
                        clearAllFields();
                        break;
                    case config.types.APPLY_BOOKMARK:
                        applyBookmark(obj.bookmark);
                        break;
                }

            }
        });
    }
    function selectValueInField(field, expression) {
		app.field(field).selectMatch(expression);
    }
    function setVariable(variable, expression) {
        if (isNaN(expression)) {
            app.variable.setStringValue(variable, "='" + expression + "'");
        }
        else {
            app.variable.setNumValue(variable, Number(expression));
        }
    }
    function clearField(field) {
        app.field(field).clear();
    }
    function clearAllFields() {
        app.clearAll();
    }
    function applyBookmark(bookmark) {
        app.bookmark.apply(bookmark);
    }
    let getBookmarkList = function () {
        let defer = $q.defer();
        return app.getList("BookmarkList", function (items) {
            defer.resolve(items.qBookmarkList.qItems.map(function (item) {
                return {
                    value: item.qInfo.qId,
                    label: item.qData.title
                };
            }));
        }), defer.promise;
    };
    return {
        act: act, getBookmarkList: getBookmarkList
    };
});
