"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1ldGVyIHByb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9DbGFzc2VzL1BhcmFtZXRlciBwcm9wZXJ0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7b0NBRW9DO0FBQ3BDLE1BQU0sWUFBWTtJQUVkLFlBQXFCLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBRHhCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO0lBR2xDLENBQUM7Q0FDSjtBQUVELElBQUksR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyJ9