enum actionTypes {
  ADD,
  SUBTRACT
}

interface Action {}
// interface
interface CalcAction extends Action {
  value: number;
}

// delegate
const createAddAction: (value: number) => CalcAction = value => ({
  type: actionTypes.ADD,
  value
});

// delegate
const createSubtractAction: (value: number) => CalcAction = value => ({
  type: actionTypes.SUBTRACT,
  value
});

createAddAction(15);
createSubtractAction(10);
