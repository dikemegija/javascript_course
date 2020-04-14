const {test, assertEquals, runKUnit} = require("../kunit/kunit");
const calculate = require("./index");
test("2 + 2 = 4",function () {
    const actual = calculate("2 + 2");
    const expected = 4;
    assertEquals(actual,expected);
});
test("when not a number",function () {
    const actual = calculate("b + a");
    const expected = " Only numbers are allowed in expression! ";
    assertEquals(actual,expected);
});
test("when lenght more than 3",function () {
    const actual = calculate("1");
    const expected = "invalid expression!";
    assertEquals(actual,expected);
});
test("when not right operation",function () {
    const actual = calculate("2 ! 2");
    const expected = 'Your operator is invalid!';
    assertEquals(actual,expected);
});
test("3 - 3 = 0",function () {
    const actual = calculate("3 - 3");
    const expected = 0;
    assertEquals(actual,expected);
});
test("3 % 2 = 1", function () {
    const actual = calculate("3 % 2");
    const expected = 1;
    assertEquals(actual,expected);
});
runKUnit();
