"use strict";
/*Which leads us to writing our first generic interface.
Let’s take the object literal from the previous example and move it to an interface: */
function GenericInterface() {
    function identity(arg) {
        return arg;
    }
    let myIdentity = identity;
    let result = myIdentity("this is my identity 2");
    console.log(result);
}
GenericInterface();
/*In a similar example, we may want to move the generic
parameter to be a parameter of the whole interface. This lets us
see what type(s) we’re generic over (e.g. Dictionary<string> rather
than just Dictionary). This makes the type parameter visible to
all the other members of the interface. */
function GenericInterface2() {
    function identity(arg) {
        return arg;
    }
    let myIdentity = identity;
    let result = myIdentity(1234);
    console.log(result);
}
GenericInterface2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYyBpbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW5lcmljIGludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7dUZBQ3VGO0FBQ3ZGLFNBQVMsZ0JBQWdCO0lBS3ZCLFNBQVMsUUFBUSxDQUFJLEdBQU07UUFDekIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsSUFBSSxVQUFVLEdBQXNCLFFBQVEsQ0FBQztJQUM3QyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxnQkFBZ0IsRUFBRSxDQUFDO0FBQ25COzs7OzBDQUkwQztBQUMxQyxTQUFTLGlCQUFpQjtJQUt4QixTQUFTLFFBQVEsQ0FBSSxHQUFNO1FBQ3pCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksVUFBVSxHQUE4QixRQUFRLENBQUM7SUFDckQsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUNELGlCQUFpQixFQUFFLENBQUMifQ==