/*When creating factories in TypeScript using generics,
it is necessary to refer to class types by their constructor functions.
For example, */
function UsingClassTypes() {
    function create(c) {
        return new c();
    }
}
/*A more advanced example uses the prototype property to
infer and constrain relationships between the constructor function and
the instance side of class types. */
function UsingClassTypesAdvanced() {
    class BeeKeeper {
    }
    class ZooKeeper {
    }
    class Animal {
    }
    class Bee extends Animal {
    }
    class Lion extends Animal {
    }
    function createInstance(c) {
        return new c();
    }
    try {
        createInstance(Lion).keeper.nametag; // typechecks!
        createInstance(Bee).keeper.hasMask; // typechecks!
    }
    catch (ex) {
        console.log(ex);
    }
}
UsingClassTypesAdvanced();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNpbmcgQ2xhc3MgVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2luZyBDbGFzcyBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7ZUFFZTtBQUNmO0lBQ0UsZ0JBQW1CLENBQWdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQUNEOztvQ0FFb0M7QUFDcEM7SUFDRTtLQUVDO0lBRUQ7S0FFQztJQUVEO0tBRUM7SUFFRCxTQUFVLFNBQVEsTUFBTTtLQUV2QjtJQUVELFVBQVcsU0FBUSxNQUFNO0tBRXhCO0lBQ0Qsd0JBQTBDLENBQWM7UUFDdEQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJO1FBQ0YsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjO1FBQ25ELGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYztLQUNuRDtJQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFDRCx1QkFBdUIsRUFBRSxDQUFDIn0=