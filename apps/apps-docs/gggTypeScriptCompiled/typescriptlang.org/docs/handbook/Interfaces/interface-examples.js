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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLWV4YW1wbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svSW50ZXJmYWNlcy9pbnRlcmZhY2UtZXhhbXBsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUssV0FHSjtBQUhELFdBQUssV0FBVztJQUNkLDJDQUFHLENBQUE7SUFDSCxxREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLFdBQVcsS0FBWCxXQUFXLFFBR2Y7QUFRRCxXQUFXO0FBQ1gsTUFBTSxlQUFlLEdBQWtDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvRCxJQUFJLEVBQUUsV0FBVyxDQUFDLEdBQUc7SUFDckIsS0FBSztDQUNOLENBQUMsQ0FBQztBQUVILFdBQVc7QUFDWCxNQUFNLG9CQUFvQixHQUFrQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRO0lBQzFCLEtBQUs7Q0FDTixDQUFDLENBQUM7QUFFSCxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEIsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUMifQ==