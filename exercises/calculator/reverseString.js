const {test, assertEquals, runKUnit} = require('../../exercises/kunit/kunit');

/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    let splitString = s.split("").reverse().join("");
    console.log(splitString)
    return splitString
}


test("test 1", function () {
    const actual = reverseString("hello")
    const expected = 'olleh';
    assertEquals(actual,expected);
});

test("test 2", function () {
    const actual = reverseString('Everything is fine');
    const expected = 'enif si gnihtyrevE';
    assertEquals(actual,expected);
});

runKUnit();