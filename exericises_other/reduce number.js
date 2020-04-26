/*Given a non-negative integer num, return the number of steps to reduce it to
zero. If the current number is even, you have to divide it by 2, otherwise, you
have to subtract 1 from it.

    Example 1:

Input: num = 14
Output: 6
Explanation:
    Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.*/
/*Input: num = 8
Output: 4
Explanation:
    Step 1) 8 is even; divide by 2 and obtain 4.
Step 2) 4 is even; divide by 2 and obtain 2.
Step 3) 2 is even; divide by 2 and obtain 1.
Step 4) 1 is odd; subtract 1 and obtain 0.*/

const {test, assertEquals, runKUnit} = require('../exercises/kunit/kunit');
/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {
    let currentNumber = num;
    let numberOfSteps = 0;
    while (currentNumber !== 0) {
        if (isOdd(currentNumber)) {
            currentNumber = currentNumber - 1
        } else {
            currentNumber = currentNumber / 2
        }
        numberOfSteps++;
    }
}

let n = 0;
while (n < 3){
    n++
}

console.log(n);
   /* /if (num / 2){
        return 4
    }
    if (4 / 2){
        return 2
    }
    if (2 / 2){
        return 1
    }
    if (1 - 1){
        return 0
    }*/







function isEven(number){
    if (number / 2){
        return true
    } else {}
    return false
}
function isOdd(number){
    if (number - 1) {
        return true
    } else {
        return false
    }
}
console.log(isOdd(7));

console.log(isEven(14));

test("test 1", function () {
    const actual = numberOfSteps(14)
    const expected = 6;
    assertEquals(actual,expected);
});
test("test 2", function () {
    const actual = numberOfSteps(8)
    const expected = 4;
    assertEquals(actual,expected);
});
runKUnit();
