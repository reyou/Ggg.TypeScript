"use strict";
/*In most cases, enums are a perfectly valid solution. However sometimes
requirements are tighter. To avoid paying the cost of extra generated
code and additional indirection when accessing enum values, it’s possible
to use const enums. Const enums are defined using the const
modifier on our enums: */
function ConstEnums() {
    console.log(2 /* B */);
}
ConstEnums();
/*Const enums can only use constant enum expressions and unlike regular
enums they are completely removed during compilation. Const enum members
are inlined at use sites. This is possible since const enums cannot have
computed members. */
function ConstEnums2() {
    var directions = [
        0 /* Up */,
        1 /* Down */,
        2 /* Left */,
        3 /* Right */
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3QgZW51bXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zdCBlbnVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7eUJBSXlCO0FBQ3pCO0lBS0UsT0FBTyxDQUFDLEdBQUcsV0FBUSxDQUFDO0FBQ3RCLENBQUM7QUFDRCxVQUFVLEVBQUUsQ0FBQztBQUNiOzs7b0JBR29CO0FBQ3BCO0lBUUUsSUFBSSxVQUFVLEdBQUc7Ozs7O0tBS2hCLENBQUM7QUFDSixDQUFDIn0=