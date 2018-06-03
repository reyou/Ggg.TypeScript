/*You can make properties readonly by using the readonly keyword.
Readonly properties must be initialized at their declaration
or in the constructor. */
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// error! name is readonly.
// dad.name = "Man with the 3-piece suit"; 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZG9ubHkgbW9kaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWFkb25seSBtb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7eUJBRXlCO0FBQ3pCO0lBR0ksWUFBWSxPQUFlO1FBRGxCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQUNELElBQUksR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDcEQsMkJBQTJCO0FBQzNCLDJDQUEyQyJ9