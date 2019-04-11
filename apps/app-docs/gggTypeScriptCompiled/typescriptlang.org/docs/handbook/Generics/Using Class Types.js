"use strict";
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
        constructor() {
            super(...arguments);
            this.keeper = new BeeKeeper();
        }
    }
    class Lion extends Animal {
        constructor() {
            super(...arguments);
            this.keeper = new ZooKeeper();
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNpbmcgQ2xhc3MgVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9HZW5lcmljcy9Vc2luZyBDbGFzcyBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O2VBRWU7QUFDZixTQUFTLGVBQWU7SUFDdEIsU0FBUyxNQUFNLENBQUksQ0FBZ0I7UUFDakMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDO0FBQ0Q7O29DQUVvQztBQUNwQyxTQUFTLHVCQUF1QjtJQUM5QixNQUFNLFNBQVM7S0FFZDtJQUVELE1BQU0sU0FBUztLQUVkO0lBRUQsTUFBTSxNQUFNO0tBRVg7SUFFRCxNQUFNLEdBQUksU0FBUSxNQUFNO1FBQXhCOztZQUNFLFdBQU0sR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVELE1BQU0sSUFBSyxTQUFRLE1BQU07UUFBekI7O1lBQ0UsV0FBTSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBQ0QsU0FBUyxjQUFjLENBQW1CLENBQWM7UUFDdEQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJO1FBQ0YsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjO1FBQ25ELGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYztLQUNuRDtJQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFDRCx1QkFBdUIsRUFBRSxDQUFDIn0=