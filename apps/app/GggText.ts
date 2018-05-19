interface ITextSearchable {
    Search(source: string, subString: string): boolean;
}

export class GggText implements ITextSearchable {
    public Search(source: string, subString: string): boolean {
        let result = source.search(subString);
        return result > -1;
    }
    public static GetRandomString(): string {
        // embedded expressions
        var random1 = "RandomPart1";
        var random2 = "RandomPart2";
        // many common problems in JavaScript are alleviated by using let, 
        // so you should use it instead of var whenever possible.
        let randomString: string = `${random1} ${random2}`;
        return randomString;
    }
    public static GetStringLength(param: Object): number {
        let someValue: string = param.toString();
        // Type assertions
        let strLength: number = (<string>someValue).length;
        return strLength;
    }
    public static GetStringLengthAs(param: Object): number {
        let someValue: string = param.toString();
        // Type assertions
        // when using TypeScript with JSX, only as-style assertions are allowed.
        let strLength: number = (someValue as string).length;
        return strLength;
    }

}