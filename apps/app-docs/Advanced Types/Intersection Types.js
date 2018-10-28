"use strict";
/*An intersection type combines multiple types into one. This allows
you to add together existing types to get a single type that has
all the features you need. For example, Person & Serializable &
Loggable is a Person and Serializable and Loggable. That means an
object of this type will have all members of all three types.
You will mostly see intersection types used for mixins and other concepts
that don’t fit in the classic object-oriented mold. (There are a lot of
these in JavaScript!) Here’s a simple example that shows how to create a mixin: */
function IntersectionTypes() {
    function extend(first, second) {
        let result = {};
        for (let id in first) {
            result[id] = first[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class ConsoleLogger {
        log() {
            console.log("ConsoleLogger.log()");
        }
    }
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
}
IntersectionTypes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJzZWN0aW9uIFR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW50ZXJzZWN0aW9uIFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztrRkFPa0Y7QUFDbEYsU0FBUyxpQkFBaUI7SUFDeEIsU0FBUyxNQUFNLENBQU8sS0FBUSxFQUFFLE1BQVM7UUFDdkMsSUFBSSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxFQUFFO1lBQ2QsTUFBTyxDQUFDLEVBQUUsQ0FBQyxHQUFTLEtBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0QztRQUNELEtBQUssSUFBSSxFQUFFLElBQUksTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUN4QixNQUFPLENBQUMsRUFBRSxDQUFDLEdBQVMsTUFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0QsTUFBTSxNQUFNO1FBQ1YsWUFBbUIsSUFBWTtZQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFBRyxDQUFDO0tBQ3BDO0lBSUQsTUFBTSxhQUFhO1FBQ2pCLEdBQUc7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckMsQ0FBQztLQUNGO0lBQ0QsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2pCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFDRCxpQkFBaUIsRUFBRSxDQUFDIn0=