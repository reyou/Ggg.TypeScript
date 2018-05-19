/*You can make properties readonly by using the readonly keyword. 
Readonly properties must be initialized at their declaration 
or in the constructor. */
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// error! name is readonly.
// dad.name = "Man with the 3-piece suit"; 
