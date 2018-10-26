"use strict";
var actionTypes;
(function (actionTypes) {
    actionTypes[actionTypes["ADD"] = 0] = "ADD";
    actionTypes[actionTypes["SUBTRACT"] = 1] = "SUBTRACT";
})(actionTypes || (actionTypes = {}));
// delegate
var createAddAction = function (value) { return ({
    type: actionTypes.ADD,
    value: value
}); };
// delegate
var createSubtractAction = function (value) { return ({
    type: actionTypes.SUBTRACT,
    value: value
}); };
createAddAction(15);
createSubtractAction(10);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLWV4YW1wbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZXJmYWNlLWV4YW1wbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFLLFdBR0o7QUFIRCxXQUFLLFdBQVc7SUFDZCwyQ0FBRyxDQUFBO0lBQ0gscURBQVEsQ0FBQTtBQUNWLENBQUMsRUFISSxXQUFXLEtBQVgsV0FBVyxRQUdmO0FBUUQsV0FBVztBQUNYLElBQU0sZUFBZSxHQUFrQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUM7SUFDL0QsSUFBSSxFQUFFLFdBQVcsQ0FBQyxHQUFHO0lBQ3JCLEtBQUssT0FBQTtDQUNOLENBQUMsRUFIOEQsQ0FHOUQsQ0FBQztBQUVILFdBQVc7QUFDWCxJQUFNLG9CQUFvQixHQUFrQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUM7SUFDcEUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRO0lBQzFCLEtBQUssT0FBQTtDQUNOLENBQUMsRUFIbUUsQ0FHbkUsQ0FBQztBQUVILGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyJ9