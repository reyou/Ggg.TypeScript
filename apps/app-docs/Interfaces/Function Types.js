/*Once defined, we can use this function type interface like we
would other interfaces. Here, we show how you can create a variable
of a function type and assign it a function value of the same type. */
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var result = mySearch("this is a sentence.", "ten");
console.log(result);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24gVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGdW5jdGlvbiBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQTs7c0VBRXNFO0FBQ3RFLElBQUksUUFBb0IsQ0FBQztBQUN6QixRQUFRLEdBQUcsVUFBUyxNQUFjLEVBQUUsU0FBaUI7SUFDbkQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxPQUFPLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFDRixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9