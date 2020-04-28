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

const {test, assertEquals, runKUnit} = require('../../exercises/kunit/kunit');
/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {

    function even(a, b) {
        return a / b;
    }
    function odd(a,b) {
        return a - b;
    }


}


test("test 1", function () {
    const actual = numberOfSteps(14)
    const expected = 6;
    assertEquals(actual,expected);
});
runKUnit();
