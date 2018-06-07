// The easiest way to see how interfaces work is to start
// with a simple example:
/*The type-checker checks the call to printLabel. The printLabel
function has a single parameter that requires that the object passed
in has a property called label of type string. Notice that our object
actually has more properties than this, but the compiler only checks
that at least the ones required are present and match the types required.
There are some cases where TypeScript isn’t as lenient, which we’ll cover in a bit. */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabel(myObj);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3VyIEZpcnN0IEludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk91ciBGaXJzdCBJbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELHlCQUF5QjtBQUN6Qjs7Ozs7c0ZBS3NGO0FBQ3RGLG9CQUFvQixXQUE4QjtJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQsSUFBSSxLQUFLLEdBQUc7SUFDVixJQUFJLEVBQUUsRUFBRTtJQUNSLEtBQUssRUFBRSxnQkFBZ0I7Q0FDeEIsQ0FBQztBQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9