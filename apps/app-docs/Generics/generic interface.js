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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYyBpbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW5lcmljIGludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTt1RkFDdUY7QUFDdkY7SUFLRSxrQkFBcUIsR0FBTTtRQUN6QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBc0IsUUFBUSxDQUFDO0lBQzdDLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUNELGdCQUFnQixFQUFFLENBQUM7QUFDbkI7Ozs7MENBSTBDO0FBQzFDO0lBS0Usa0JBQXFCLEdBQU07UUFDekIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsSUFBSSxVQUFVLEdBQThCLFFBQVEsQ0FBQztJQUNyRCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsaUJBQWlCLEVBQUUsQ0FBQyJ9