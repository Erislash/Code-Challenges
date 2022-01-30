/*
String.prototype.slice()
    slice(beginIndex)
    slice(beginIndex, endIndex)
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


*/

function solution(str, ending){
    const strLength = str.length;
    const endingLength = ending.length;

    if (typeof(str) != 'string' || typeof(str) != 'string')
        throw 'Wrong type';
    
    if (endingLength > strLength)
        return false;


    return str.slice(strLength - endingLength, strLength) === ending;
}

console.log(solution('abc', 'abc')) // returns true
console.log(solution('abc', 'bc')) // returns true
console.log(solution('abc', 'd')) // returns false
console.log(solution('abc', 'aabc')) // returns false



// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(solution('abcde', 'cde'), true)
//   Test.assertEquals(solution('abcde', 'abc'), false)
//   });
//   });
