"use strict";
/*Both for..of and for..in statements iterate over lists;
the values iterated on are different though, for..in returns a
list of keys on the object being iterated, whereas for..of returns a
list of values of the numeric properties of the object being iterated.
Here is an example that demonstrates this distinction: */
function ForInStatements() {
    let list = [4, 5, 6];
    for (let i in list) {
        console.log(i); // "0", "1", "2",
    }
    for (let i of list) {
        console.log(i); // "4", "5", "6"
    }
}
ForInStatements();
console.log("\n=========================================\n");
function ForInStatements2() {
    let list = ["hello", "mello", "cello"];
    for (let i in list) {
        console.log(i);
    }
    for (let i of list) {
        console.log(i);
    }
}
ForInStatements2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yIGluIHN0YXRlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3IgaW4gc3RhdGVtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7eURBSXlEO0FBQ3pELFNBQVMsZUFBZTtJQUNwQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFckIsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtLQUNwQztJQUVELEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7S0FDbkM7QUFFTCxDQUFDO0FBQ0QsZUFBZSxFQUFFLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0FBQzdELFNBQVMsZ0JBQWdCO0lBQ3JCLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV2QyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xCO0lBRUQsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQjtBQUVMLENBQUM7QUFDRCxnQkFBZ0IsRUFBRSxDQUFDIn0=