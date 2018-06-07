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