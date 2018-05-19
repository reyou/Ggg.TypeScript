"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GggMath {
    static SumWithMultiParam([first, second]) {
        return first + second;
    }
    static ActionStateImmutableSumSample() {
        const actions = [
            {
                type: "add",
                value: 1
            },
            {
                type: "substract",
                value: 2
            },
            {
                type: "add",
                value: 3
            },
            {
                type: "substract",
                value: 4
            },
            {
                type: "add",
                value: 5
            }
        ];
        const finalState = actions.reduce((state, action) => {
            console.log("state", state, "action", action);
            switch (action.type) {
                case "add":
                    // instead of mutating, new object is getting created
                    // we can implement undo with this way
                    return Object.assign({}, state, { sum: state.sum + action.value });
                case "substract":
                    return Object.assign({}, state, { sum: state.sum - action.value });
                default:
                    return state;
            }
        }, { sum: 0 });
        console.log("finalState", finalState);
    }
    static ActionStateMutableSumSample() {
        const actions = [
            {
                type: "add",
                value: 1
            },
            {
                type: "substract",
                value: 2
            },
            {
                type: "add",
                value: 3
            },
            {
                type: "substract",
                value: 4
            },
            {
                type: "add",
                value: 5
            }
        ];
        const finalState = actions.reduce((state, action) => {
            console.log("state", state, "action", action);
            switch (action.type) {
                case "add":
                    return state + action.value;
                case "substract":
                    return state - action.value;
                default:
                    return state;
            }
        }, 0);
        return finalState;
    }
    static SumWithReduce(array) {
        var reduced = array.reduce((pivot, calculated) => {
            var sum = pivot + calculated;
            return sum;
        });
        return reduced;
    }
    static Sum(number1, number2) {
        var result = number1 + number2;
        return result;
    }
    static Random(min, max) {
        let mathRandom = Math.random();
        let adjustment = (max - min + 1) + min;
        var tempRandom = mathRandom * adjustment;
        var randomNumber = Math.floor(tempRandom);
        return randomNumber;
    }
    static RandomBool() {
        var randomInt = GggMath.Random(0, 1);
        if (randomInt == 0) {
            return false;
        }
        return true;
    }
}
exports.GggMath = GggMath;
//# sourceMappingURL=GggMath.js.map