var actionTypes;
(function (actionTypes) {
    actionTypes[actionTypes["ADD"] = 0] = "ADD";
    actionTypes[actionTypes["SUBSTRACT"] = 1] = "SUBSTRACT";
})(actionTypes || (actionTypes = {}));
// delegate
const createAddAction = (value) => ({
    type: actionTypes.ADD,
    value
});
// delegate
const createSubstractAction = (value) => ({
    type: actionTypes.SUBSTRACT,
    value
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLWV4YW1wbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZXJmYWNlLWV4YW1wbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUssV0FHSjtBQUhELFdBQUssV0FBVztJQUNaLDJDQUFHLENBQUE7SUFDSCx1REFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUhJLFdBQVcsS0FBWCxXQUFXLFFBR2Y7QUFVRCxXQUFXO0FBQ1gsTUFBTSxlQUFlLEdBQWtDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELElBQUksRUFBRSxXQUFXLENBQUMsR0FBRztJQUNyQixLQUFLO0NBQ1IsQ0FBQyxDQUFDO0FBRUgsV0FBVztBQUNYLE1BQU0scUJBQXFCLEdBQWtDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLElBQUksRUFBRSxXQUFXLENBQUMsU0FBUztJQUMzQixLQUFLO0NBQ1IsQ0FBQyxDQUFBIn0=