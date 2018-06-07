/*Technically enums can be mixed with string and numeric members,
but it’s not clear why you would ever want to do so: */
/*Unless you’re really trying to take advantage of JavaScript’s
runtime behavior in a clever way, it’s advised that you don’t do this. */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGV0ZXJvZ2VuZW91cyBlbnVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhldGVyb2dlbmVvdXMgZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7dURBQ3VEO0FBQ3ZEO3lFQUN5RTtBQUN6RSxJQUFLLDRCQUdKO0FBSEQsV0FBSyw0QkFBNEI7SUFDL0IsMkVBQU0sQ0FBQTtJQUNOLDJDQUFXLENBQUE7QUFDYixDQUFDLEVBSEksNEJBQTRCLEtBQTVCLDRCQUE0QixRQUdoQyJ9