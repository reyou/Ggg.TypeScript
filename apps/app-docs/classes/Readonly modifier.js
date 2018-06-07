/*You can make properties readonly by using the readonly keyword.
Readonly properties must be initialized at their declaration
or in the constructor. */
var Octopus = (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// error! name is readonly.
// dad.name = "Man with the 3-piece suit"; 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZG9ubHkgbW9kaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWFkb25seSBtb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7eUJBRXlCO0FBQ3pCO0lBR0ksaUJBQVksT0FBZTtRQURsQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFORCxJQU1DO0FBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUNwRCwyQkFBMkI7QUFDM0IsMkNBQTJDIn0=