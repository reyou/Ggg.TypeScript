"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lettersRegexp = /^[A-Za-z]+$/;
class LettersOnlyValidator {
    isAcceptable(s) {
        return lettersRegexp.test(s);
    }
}
exports.LettersOnlyValidator = LettersOnlyValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV0dGVyc09ubHlWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9Nb2R1bGVzL1NpbXBsZSBFeGFtcGxlL0xldHRlcnNPbmx5VmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBRXBDLE1BQWEsb0JBQW9CO0lBQy9CLFlBQVksQ0FBQyxDQUFTO1FBQ3BCLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFKRCxvREFJQyJ9