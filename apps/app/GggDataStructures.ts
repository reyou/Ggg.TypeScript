import { GggCore } from "./GggCore"
import { GggMath } from "./GggMath";
import { GggText } from "./GggText";

export class GggDataStructures {
    public sumMatrix(matrix: number[][]) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (let i = 0; i < currentRow.length; i++) {
                sum += currentRow[i];
            }
        }
        return sum;
    }
    public static GetRandomMixedArray(size: number): any[] {
        enum ItemType {
            String,
            Number,
            Boolean
        }
        let list: any[] = [size];
        for (var q = 0; q < size; q++) {
            var randomNumber = GggMath.Random(0, 2);
            var itemType = ItemType[randomNumber];
            switch (itemType) {
                case "String":
                    list[q] = GggText.GetRandomString();
                    break;
                case "Number":
                    list[q] = GggMath.Random(0, 100);
                    break;
                case "Boolean":
                    list[q] = GggMath.RandomBool();
                    break;
            }
        }
        return list;
    }
    public static GetRandomIntTuple(min: number, max: number): [number, number] {
        let randomIntTuple: [number, number];
        let randomNumber1: number = GggMath.Random(min, max);
        let randomNumber2: number = GggMath.Random(min, max);
        randomIntTuple = [randomNumber1, randomNumber2];
        return randomIntTuple;
    }
    public static GetRandomIntArray(size: number, min: number, max: number): number[] {
        let list: Array<number> = [size];
        for (var i = 0; i < size; i++) {
            let randomNumber: number = GggMath.Random(min, max);
            list[i] = randomNumber;
        }
        return list;
    }
    static MixedSample(): any {
        var nums = GggDataStructures.CreateMatrix(5, 5, 0);
        GggCore.Log("qqq: " + nums[1][1]); // displays 0
        var names = GggDataStructures.CreateMatrix(3, 3, 1);
        names[1][2] = 5;
        GggCore.Log("www: " + names[1][2]);
        var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
        GggCore.Log("eee: " + grades[2][2]); // displays 89 */
        var matrixCreated = GggDataStructures.CreateMatrix(2, 2, 0);
        GggDataStructures.PrintMatrix(matrixCreated);
    }
    public static CreateMatrix(numrows: number, numcols: number, initial: number): number[][] {
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
    public static PrintMatrix(matrix: number[][]) {
        for (var i = 0; i < matrix.length; i++) {
            var row = matrix[i];
            for (var q = 0; q < row.length; q++) {
                var item = row[q];
                console.log(`Row: ${i + 1} Column: ${q + 1} Item: ${item}`);
            }
        }
    }

}
