/*Parameter properties let you create and initialize a member
in one place. Here’s a further revision of the previous Octopus
class using a parameter property: */
var OctopusParam = /** @class */ (function () {
    function OctopusParam(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return OctopusParam;
}());
var oct = new OctopusParam("worawura");
console.log("oct:");
console.log(oct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1ldGVyIHByb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYXJhbWV0ZXIgcHJvcGVydGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7b0NBRW9DO0FBQ3BDO0lBRUksc0JBQXFCLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBRHhCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO0lBR2xDLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDIn0=