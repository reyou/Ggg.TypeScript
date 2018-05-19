"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GggCore_1 = require("./GggCore");
const GggMath_1 = require("./GggMath");
const GggText_1 = require("./GggText");
class GggDataStructures {
    sumMatrix(matrix) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (let i = 0; i < currentRow.length; i++) {
                sum += currentRow[i];
            }
        }
        return sum;
    }
    static GetRandomMixedArray(size) {
        let ItemType;
        (function (ItemType) {
            ItemType[ItemType["String"] = 0] = "String";
            ItemType[ItemType["Number"] = 1] = "Number";
            ItemType[ItemType["Boolean"] = 2] = "Boolean";
        })(ItemType || (ItemType = {}));
        let list = [size];
        for (var q = 0; q < size; q++) {
            var randomNumber = GggMath_1.GggMath.Random(0, 2);
            var itemType = ItemType[randomNumber];
            switch (itemType) {
                case "String":
                    list[q] = GggText_1.GggText.GetRandomString();
                    break;
                case "Number":
                    list[q] = GggMath_1.GggMath.Random(0, 100);
                    break;
                case "Boolean":
                    list[q] = GggMath_1.GggMath.RandomBool();
                    break;
            }
        }
        return list;
    }
    static GetRandomIntTuple(min, max) {
        let randomIntTuple;
        let randomNumber1 = GggMath_1.GggMath.Random(min, max);
        let randomNumber2 = GggMath_1.GggMath.Random(min, max);
        randomIntTuple = [randomNumber1, randomNumber2];
        return randomIntTuple;
    }
    static GetRandomIntArray(size, min, max) {
        let list = [size];
        for (var i = 0; i < size; i++) {
            let randomNumber = GggMath_1.GggMath.Random(min, max);
            list[i] = randomNumber;
        }
        return list;
    }
    static MixedSample() {
        var nums = GggDataStructures.CreateMatrix(5, 5, 0);
        GggCore_1.GggCore.Log("qqq: " + nums[1][1]); // displays 0
        var names = GggDataStructures.CreateMatrix(3, 3, 1);
        names[1][2] = 5;
        GggCore_1.GggCore.Log("www: " + names[1][2]);
        var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
        GggCore_1.GggCore.Log("eee: " + grades[2][2]); // displays 89 */
        var matrixCreated = GggDataStructures.CreateMatrix(2, 2, 0);
        GggDataStructures.PrintMatrix(matrixCreated);
    }
    static CreateMatrix(numrows, numcols, initial) {
        var arr = [];
        for (var i = 0; i < numrows; ++i) {
            var columns = [];
            for (var j = 0; j < numcols; ++j) {
                columns[j] = initial;
            }
            arr[i] = columns;
        }
        return arr;
    }
    static PrintMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            var row = matrix[i];
            for (var q = 0; q < row.length; q++) {
                var item = row[q];
                console.log(`Row: ${i + 1} Column: ${q + 1} Item: ${item}`);
            }
        }
    }
}
exports.GggDataStructures = GggDataStructures;
//# sourceMappingURL=GggDataStructures.js.map