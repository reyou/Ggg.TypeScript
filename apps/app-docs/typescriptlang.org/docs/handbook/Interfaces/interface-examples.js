"use strict";
var actionTypes;
(function (actionTypes) {
    actionTypes[actionTypes["ADD"] = 0] = "ADD";
    actionTypes[actionTypes["SUBTRACT"] = 1] = "SUBTRACT";
})(actionTypes || (actionTypes = {}));
// delegate
const createAddAction = value => ({
    type: actionTypes.ADD,
    value
});
// delegate
const createSubtractAction = value => ({
    type: actionTypes.SUBTRACT,
    value
});
createAddAction(15);
createSubtractAction(10);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLWV4YW1wbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZXJmYWNlLWV4YW1wbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFLLFdBR0o7QUFIRCxXQUFLLFdBQVc7SUFDZCwyQ0FBRyxDQUFBO0lBQ0gscURBQVEsQ0FBQTtBQUNWLENBQUMsRUFISSxXQUFXLEtBQVgsV0FBVyxRQUdmO0FBUUQsV0FBVztBQUNYLE1BQU0sZUFBZSxHQUFrQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0QsSUFBSSxFQUFFLFdBQVcsQ0FBQyxHQUFHO0lBQ3JCLEtBQUs7Q0FDTixDQUFDLENBQUM7QUFFSCxXQUFXO0FBQ1gsTUFBTSxvQkFBb0IsR0FBa0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUTtJQUMxQixLQUFLO0NBQ04sQ0FBQyxDQUFDO0FBRUgsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDIn0=