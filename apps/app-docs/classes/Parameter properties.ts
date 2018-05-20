/*Parameter properties let you create and initialize a member 
in one place. Here’s a further revision of the previous Octopus 
class using a parameter property: */
class OctopusParam {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {

    }
}

let oct = new OctopusParam("worawura");
console.log("oct:");
console.log(oct);
