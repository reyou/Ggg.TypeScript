"use strict";
/*The type of generic functions is just like those of non-generic functions,
with the type parameters listed first, similarly to function declarations: */
function GenericTypes() {
    function identity(arg) {
        return arg;
    }
    var myIdentity = identity;
    var result = myIdentity("this is my identity");
    console.log(result);
}
GenericTypes();
/*We could also have used a different name for the generic
type parameter in the type, so long as the number of
type variables and how the type variables are used line up. */
function GenericTypes2() {
    function identity(arg) {
        return arg;
    }
    var myIdentity = identity;
    var result = myIdentity("this is my identity 2");
    console.log(result);
}
GenericTypes2();
// We can also write the generic type as a call signature of an object literal type:
function GenericTypes3() {
    function identity(arg) {
        return arg;
    }
    var myIdentity = identity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpYyBUeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdlbmVyaWMgVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzZFQUM2RTtBQUM3RTtJQUNFLGtCQUFxQixHQUFNO1FBQ3pCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksVUFBVSxHQUFxQixRQUFRLENBQUM7SUFDNUMsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsWUFBWSxFQUFFLENBQUM7QUFDZjs7OERBRThEO0FBQzlEO0lBQ0Usa0JBQXFCLEdBQU07UUFDekIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsSUFBSSxVQUFVLEdBQXFCLFFBQVEsQ0FBQztJQUM1QyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxhQUFhLEVBQUUsQ0FBQztBQUNoQixvRkFBb0Y7QUFDcEY7SUFDRSxrQkFBcUIsR0FBTTtRQUN6QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBdUIsUUFBUSxDQUFDO0FBQ2hELENBQUMifQ==