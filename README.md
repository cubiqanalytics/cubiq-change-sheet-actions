# Cubiq Change Sheet Actions

Extension for Qlik Sense

Performs actions when user enters or leaves a sheet, similar to Sheet Event Trigger in QlikView. The extension does not contain any visualization and is intended to be invisible for users.
One sheet can contain many actions of different types. Only one action of each type is supported (for example on enter sheet, clear all selections and select value in field). If multiple actions of same type are defined on a sheet, the last action will override previous actions of same type. The actions are executed in same order as they are defined.


### Triggers

On Enter Sheet

On Leave Sheet


### Action types

**Select Value In Field**

Selects a matching field value. Target (field) and Expression (value) must be defined. Only one value is supported.

![Select Value In Field](https://raw.githubusercontent.com/cubiqanalytics/cubiq-change-sheet-actions/master/img/properties-select-value-in-field.PNG)


**Clear Field**

Clears a field selection. Target (field) must be defined.

![Clear Field](https://raw.githubusercontent.com/cubiqanalytics/cubiq-change-sheet-actions/master/img/properties-clear-field.PNG)


**Clear All Fields**

Clears all selections in all fields.

![Clear All Fields](https://raw.githubusercontent.com/cubiqanalytics/cubiq-change-sheet-actions/master/img/properties-clear-all-fields.PNG)


**Set Variable**

Target (variable name) and Expression (value) must be defined.

![Set Variable](https://raw.githubusercontent.com/cubiqanalytics/cubiq-change-sheet-actions/master/img/properties-set-variable.PNG)


**Apply Bookmark**

Applies selections of a bookmark. A bookmark must be selected.

![Apply Bookmark](https://raw.githubusercontent.com/cubiqanalytics/cubiq-change-sheet-actions/master/img/properties-apply-bookmark.PNG)