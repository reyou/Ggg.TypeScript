var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*There are two types of supported index signatures: string and number.
It is possible to support both types of indexers, but the type
returned from a numeric indexer must be a subtype of the type returned
from the string indexer. This is because when indexing with a number,
JavaScript will actually convert that to a string before indexing into
an object. That means that indexing with 100 (a number) is the same
thing as indexing with "100" (a string), so the two need to be consistent. */
var AnimalIndex = /** @class */ (function () {
    function AnimalIndex() {
    }
    return AnimalIndex;
}());
var DogIndex = /** @class */ (function (_super) {
    __extends(DogIndex, _super);
    function DogIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DogIndex;
}(AnimalIndex));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhhYmxlIFR5cGVzLjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbmRleGFibGUgVHlwZXMuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs2RUFNNkU7QUFDN0U7SUFBQTtJQUVBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBQ0Q7SUFBdUIsNEJBQVc7SUFBbEM7O0lBRUEsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBdUIsV0FBVyxHQUVqQyJ9