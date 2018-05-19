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
//# sourceMappingURL=GggInterfaceExamples.js.map