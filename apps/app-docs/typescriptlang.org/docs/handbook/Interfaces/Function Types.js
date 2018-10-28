"use strict";
/*Once defined, we can use this function type interface like we
would other interfaces. Here, we show how you can create a variable
of a function type and assign it a function value of the same type. */
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let result = mySearch("this is a sentence.", "ten");
console.log(result);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24gVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGdW5jdGlvbiBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0E7O3NFQUVzRTtBQUN0RSxJQUFJLFFBQW9CLENBQUM7QUFDekIsUUFBUSxHQUFHLFVBQVMsTUFBYyxFQUFFLFNBQWlCO0lBQ25ELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBQ0YsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMifQ==