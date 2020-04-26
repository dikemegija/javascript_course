



/**
 * @param {string} address
 * @return {string}
 */

const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");

function defangIPaddr(address) {
}

test("case 1",function () {
    const actual = defangIPaddr('1.1.1.1');
    const expected = "1[.]1[.]1[.]1";
    assertEquals(actual,expected);
});
runKUnit()


