"use strict";
/*for..of loops over an iterable object, invoking the Symbol.iterator
property on the object. Here is a simple for..of loop on an array: */
function ForOfStatements() {
    let someArray = [1, "string", false];
    for (let entry of someArray) {
        console.log(entry); // 1, "string", false
    }
}
ForOfStatements();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yIG9mIHN0YXRlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3Igb2Ygc3RhdGVtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7cUVBQ3FFO0FBQ3JFLFNBQVMsZUFBZTtJQUNwQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFckMsS0FBSyxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtLQUM1QztBQUVMLENBQUM7QUFFRCxlQUFlLEVBQUUsQ0FBQyJ9