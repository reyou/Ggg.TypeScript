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
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var ConsoleLogger = /** @class */ (function () {
        function ConsoleLogger() {
        }
        ConsoleLogger.prototype.log = function () {
            console.log("ConsoleLogger.log()");
        };
        return ConsoleLogger;
    }());
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
}
IntersectionTypes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJzZWN0aW9uIFR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW50ZXJzZWN0aW9uIFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2tGQU9rRjtBQUNsRjtJQUNFLGdCQUFzQixLQUFRLEVBQUUsTUFBUztRQUN2QyxJQUFJLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDdkIsS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUU7WUFDZCxNQUFPLENBQUMsRUFBRSxDQUFDLEdBQVMsS0FBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsS0FBSyxJQUFJLEVBQUUsSUFBSSxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3hCLE1BQU8sQ0FBQyxFQUFFLENBQUMsR0FBUyxNQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdkM7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRDtRQUNFLGdCQUFtQixJQUFZO1lBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFHLENBQUM7UUFDckMsYUFBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBSUQ7UUFBQTtRQUlBLENBQUM7UUFIQywyQkFBRyxHQUFIO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDSCxvQkFBQztJQUFELENBQUMsQUFKRCxJQUlDO0lBQ0QsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2pCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFDRCxpQkFBaUIsRUFBRSxDQUFDIn0=