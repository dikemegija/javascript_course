const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");

//Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

function lowercase(string){

   let x = string.split().toString().toLowerCase();
   return x
}




test("test 1",function () {
    const actual = lowercase("HELLO");
    const expected = "hello";
    assertEquals(actual,expected);
});
test("test 2",function () {
    const actual = lowercase("heY mY NaMe IS");
    const expected = "hey my name is";
    assertEquals(actual,expected);
});
test("test 3",function () {
    const actual = lowercase("CoDe123");
    const expected = 'code123';
    assertEquals(actual,expected);
});
test("test 4",function () {
    const actual = lowercase("----PLEASE ENTER password");
    const expected = '----please enter password';
    assertEquals(actual,expected);
});
runKUnit();
