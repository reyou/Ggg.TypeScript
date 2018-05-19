export class GggMath {

    static SumWithMultiParam([first, second]: [number, number]): number {
        return first + second;
    }

    static ActionStateImmutableSumSample(): any {
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
            }];

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

    static ActionStateMutableSumSample(): number {
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
            }];

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


    static SumWithReduce(array: any): number {
        var reduced = array.reduce((pivot: number, calculated: number) => {
            var sum = pivot + calculated;
            return sum;
        });
        return reduced;
    }

    public static Sum(number1: number, number2: number): number {
        var result = number1 + number2;
        return result;
    }
    public static Random(min: number, max: number): number {
        let mathRandom: number = Math.random();
        let adjustment: number = (max - min + 1) + min;
        var tempRandom: number = mathRandom * adjustment;
        var randomNumber = Math.floor(tempRandom);
        return randomNumber;
    }
    public static RandomBool(): boolean {
        var randomInt = GggMath.Random(0, 1);
        if (randomInt == 0) {
            return false;
        }
        return true;
    }
}