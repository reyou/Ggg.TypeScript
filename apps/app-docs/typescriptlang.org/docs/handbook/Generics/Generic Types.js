"use strict";
/*The type of generic functions is just like those of non-generic functions,
with the type parameters listed first, similarly to function declarations: */
function GenericTypes() {
    function identity(arg) {
        return arg;
    }
    let myIdentity = identity;
    let result = myIdentity("this is my identity");
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
    let myIdentity = identity;
    let result = myIdentity("this is my identity 2");
    console.log(result);
}
GenericTypes2();
// We can also write the generic type as a call signature of an object literal type:
function GenericTypes3() {
    function identity(arg) {
        return arg;
    }
    let myIdentity = identity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpYyBUeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdlbmVyaWMgVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzZFQUM2RTtBQUM3RSxTQUFTLFlBQVk7SUFDbkIsU0FBUyxRQUFRLENBQUksR0FBTTtRQUN6QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBcUIsUUFBUSxDQUFDO0lBQzVDLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUNELFlBQVksRUFBRSxDQUFDO0FBQ2Y7OzhEQUU4RDtBQUM5RCxTQUFTLGFBQWE7SUFDcEIsU0FBUyxRQUFRLENBQUksR0FBTTtRQUN6QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBcUIsUUFBUSxDQUFDO0lBQzVDLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUNELGFBQWEsRUFBRSxDQUFDO0FBQ2hCLG9GQUFvRjtBQUNwRixTQUFTLGFBQWE7SUFDcEIsU0FBUyxRQUFRLENBQUksR0FBTTtRQUN6QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBdUIsUUFBUSxDQUFDO0FBQ2hELENBQUMifQ==