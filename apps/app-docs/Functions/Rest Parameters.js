/*Required, optional, and default parameters all have one thing in common:
they talk about one parameter at a time. Sometimes, you want to work
with multiple parameters as a group, or you may not know how many
parameters a function will ultimately take. In JavaScript, you can work with
the arguments directly using the arguments variable that is visible inside
every function body.
In TypeScript, you can gather these arguments together into a variable: */
function RestParameters() {
    function buildName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
    console.log(employeeName);
}
RestParameters();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdCBQYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVzdCBQYXJhbWV0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7MEVBTTBFO0FBQzFFO0lBQ0UsbUJBQW1CLFNBQWlCO1FBQUUsb0JBQXVCO2FBQXZCLFVBQXVCLEVBQXZCLHFCQUF1QixFQUF2QixJQUF1QjtZQUF2QixtQ0FBdUI7O1FBQzNELE9BQU8sU0FBUyxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRUQsY0FBYyxFQUFFLENBQUMifQ==