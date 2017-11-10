# Cubiq Change Sheet Actions

Extension for Qlik Sense

Performs actions when user enters or leaves a sheet, similar to Sheet Event Trigger in QlikView. The extension does not contain any visualization and is intended to be invisible for users.
One sheet can contain many actions of different types. Only one action of each type is supported (for example on enter sheet, clear all selections and select value in field). If multiple actions of same type are defined on a sheet, the last action will override previous actions of same type. The actions are executed in same order as they are defined.

### Triggers

**On Enter Sheet**

**On Leave Sheet**

### Action types

**Select Value In Field**
Selects a matching field value. Target (field) and Expression (value) must be defined. Only one value is supported.

**Clear Field**
Clears a field selection. Target (field) must be defined.

**Clear All Fields**
Clears all selections in all fields.

**Set Variable**
Target (variable name) and Expression (value) must be defined.

**Apply Bookmark**
Applies selections of a bookmark. A bookmark must be selected.