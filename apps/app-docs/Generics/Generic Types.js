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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpYyBUeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdlbmVyaWMgVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7NkVBQzZFO0FBQzdFO0lBQ0Usa0JBQXFCLEdBQU07UUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBcUIsUUFBUSxDQUFDO0lBQzVDLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUNELFlBQVksRUFBRSxDQUFDO0FBQ2Y7OzhEQUU4RDtBQUM5RDtJQUNFLGtCQUFxQixHQUFNO1FBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsSUFBSSxVQUFVLEdBQXFCLFFBQVEsQ0FBQztJQUM1QyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxhQUFhLEVBQUUsQ0FBQztBQUNoQixvRkFBb0Y7QUFDcEY7SUFDRSxrQkFBcUIsR0FBTTtRQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksVUFBVSxHQUF1QixRQUFRLENBQUM7QUFDaEQsQ0FBQyJ9