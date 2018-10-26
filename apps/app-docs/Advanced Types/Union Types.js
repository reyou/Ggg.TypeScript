"use strict";
/*Union types are closely related to intersection types, but
they are used very differently. Occasionally, you’ll run
into a library that expects a parameter to be either a number
or a string. For instance, take the following function: */
function UnionTypes() {
    /**
     * Takes a string and adds "padding" to the left.
     * If 'padding' is a string, then 'padding' is appended to the left side.
     * If 'padding' is a number, then that number of spaces is added to the left side.
     */
    function padLeft(value, padding) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + padding + "'.");
    }
    var result = padLeft("Hello world", 4); // returns "    Hello world"
    console.log(result);
}
UnionTypes();
function UnionTypes2() {
    function padLeft(value, padding) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + padding + "'.");
    }
    var result = padLeft("Hello world", 4); // returns "    Hello world"
    console.log(result);
    // let indentedString = padLeft("Hello world", true); // errors during compilation
}
UnionTypes2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pb24gVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVbmlvbiBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OzswREFHMEQ7QUFDMUQ7SUFDRTs7OztPQUlHO0lBQ0gsaUJBQWlCLEtBQWEsRUFBRSxPQUFZO1FBQzFDLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLE9BQU8sS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsT0FBTyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBbUMsT0FBTyxPQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtJQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxVQUFVLEVBQUUsQ0FBQztBQUViO0lBQ0UsaUJBQWlCLEtBQWEsRUFBRSxPQUF3QjtRQUN0RCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM3QztRQUNELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN4QjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLE9BQU8sT0FBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7SUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixrRkFBa0Y7QUFDcEYsQ0FBQztBQUNELFdBQVcsRUFBRSxDQUFDIn0=