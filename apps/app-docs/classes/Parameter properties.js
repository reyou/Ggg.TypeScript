"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1ldGVyIHByb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYXJhbWV0ZXIgcHJvcGVydGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O29DQUVvQztBQUNwQztJQUVJLHNCQUFxQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUR4QixpQkFBWSxHQUFXLENBQUMsQ0FBQztJQUdsQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUVELElBQUksR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyJ9