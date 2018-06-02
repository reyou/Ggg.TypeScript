/*Parameter properties let you create and initialize a member
in one place. Here’s a further revision of the previous Octopus
class using a parameter property: */
class OctopusParam {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}
let oct = new OctopusParam("worawura");
console.log("oct:");
console.log(oct);
//# sourceMappingURL=Parameter properties.js.map