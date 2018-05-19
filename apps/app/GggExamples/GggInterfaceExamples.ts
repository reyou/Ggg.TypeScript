enum actionTypes {
    ADD,
    SUBSTRACT
}

interface Action {
    
}
// interface
interface CalcAction extends Action {
    value: number
}

// delegate
const createAddAction: (value: number) => CalcAction = (value) => ({
    type: actionTypes.ADD,
    value
});

// delegate
const createSubstractAction: (value: number) => CalcAction = (value) => ({
    type: actionTypes.SUBSTRACT,
    value
})