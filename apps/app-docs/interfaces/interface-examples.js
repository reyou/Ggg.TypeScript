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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLWV4YW1wbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZXJmYWNlLWV4YW1wbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUssV0FHSjtBQUhELFdBQUssV0FBVztJQUNkLDJDQUFHLENBQUE7SUFDSCxxREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLFdBQVcsS0FBWCxXQUFXLFFBR2Y7QUFRRCxXQUFXO0FBQ1gsSUFBTSxlQUFlLEdBQWtDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUMvRCxJQUFJLEVBQUUsV0FBVyxDQUFDLEdBQUc7SUFDckIsS0FBSyxPQUFBO0NBQ04sQ0FBQyxFQUg4RCxDQUc5RCxDQUFDO0FBRUgsV0FBVztBQUNYLElBQU0sb0JBQW9CLEdBQWtDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUNwRSxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVE7SUFDMUIsS0FBSyxPQUFBO0NBQ04sQ0FBQyxFQUhtRSxDQUduRSxDQUFDO0FBRUgsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDIn0=