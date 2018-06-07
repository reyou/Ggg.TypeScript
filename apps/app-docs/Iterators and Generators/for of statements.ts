/*for..of loops over an iterable object, invoking the Symbol.iterator 
property on the object. Here is a simple for..of loop on an array: */
function ForOfStatements() {
    let someArray = [1, "string", false];

    for (let entry of someArray) {
        console.log(entry); // 1, "string", false
    }

}

ForOfStatements();