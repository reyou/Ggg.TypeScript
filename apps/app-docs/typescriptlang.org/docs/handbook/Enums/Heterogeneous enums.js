"use strict";
/*Technically enums can be mixed with string and numeric members,
but it’s not clear why you would ever want to do so: */
/*Unless you’re really trying to take advantage of JavaScript’s
runtime behavior in a clever way, it’s advised that you don’t do this. */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGV0ZXJvZ2VuZW91cyBlbnVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhldGVyb2dlbmVvdXMgZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO3VEQUN1RDtBQUN2RDt5RUFDeUU7QUFDekUsSUFBSyw0QkFHSjtBQUhELFdBQUssNEJBQTRCO0lBQy9CLDJFQUFNLENBQUE7SUFDTiwyQ0FBVyxDQUFBO0FBQ2IsQ0FBQyxFQUhJLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFHaEMifQ==