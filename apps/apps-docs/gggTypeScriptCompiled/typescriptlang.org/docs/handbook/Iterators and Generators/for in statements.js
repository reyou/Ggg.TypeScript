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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yIGluIHN0YXRlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9JdGVyYXRvcnMgYW5kIEdlbmVyYXRvcnMvZm9yIGluIHN0YXRlbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O3lEQUl5RDtBQUN6RCxTQUFTLGVBQWU7SUFDcEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXJCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7S0FDcEM7SUFFRCxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO0tBQ25DO0FBRUwsQ0FBQztBQUNELGVBQWUsRUFBRSxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztBQUM3RCxTQUFTLGdCQUFnQjtJQUNyQixJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFdkMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQjtJQUVELEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7QUFFTCxDQUFDO0FBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyJ9