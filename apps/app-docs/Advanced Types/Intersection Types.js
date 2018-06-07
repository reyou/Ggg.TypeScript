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
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var ConsoleLogger = (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJzZWN0aW9uIFR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW50ZXJzZWN0aW9uIFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2tGQU9rRjtBQUNsRjtJQUNFLGdCQUFzQixLQUFRLEVBQUUsTUFBUztRQUN2QyxJQUFJLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU8sQ0FBQyxFQUFFLENBQUMsR0FBUyxLQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsTUFBTyxDQUFDLEVBQUUsQ0FBQyxHQUFTLE1BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNEO1FBQ0UsZ0JBQW1CLElBQVk7WUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQUcsQ0FBQztRQUNyQyxhQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFJRDtRQUFBO1FBSUEsQ0FBQztRQUhDLDJCQUFHLEdBQUg7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNILG9CQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFDRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDakIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUNELGlCQUFpQixFQUFFLENBQUMifQ==