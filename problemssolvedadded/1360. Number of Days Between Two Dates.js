const {test, assertEquals, runKUnit} = require("../../exercises/kunit/kunit");

/*Write a program to count the number of days between two dates.
    The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.
    Example 1:
Input: date1 = "2019-06-29", date2 = "2019-06-30"
Output: 1
Example 2:
Input: date1 = "2020-01-15", date2 = "2019-12-31"
Output: 15
Constraints:
    The given dates are valid dates between the years 1971 and 2100.*/
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
function betweenDays(date1, date2) {
    let date1splited = date1.split('-');
    let date2splited = date2.split('-');

    let date1converted = new Date(date1splited[0], date1splited[1], date1splited[2]);
    let date2converted = new Date(date2splited[0], date2splited[1], date2splited[2]);


    let date1converted_unixtime = parseInt(date1converted.getTime() / 1000);
    let date2converted_unixtime = parseInt(date2converted.getTime() / 1000);

                                         //console.log(date1converted_unixtime,date2converted_unixtime)//sekundes

    let timeDifference = date2converted_unixtime - date1converted_unixtime;

                                        //console.log(timeDifference);//starpiba starp 1 un 2 datuma sekundem

    let timeDifferenceInHours = timeDifference / 60 / 60;//lai uzzinatu pirmais cik minutes pectam cik stundas

                                        //console.log(timeDifferenceInHours)

    let timeDifferenceInDays = timeDifferenceInHours  / 24; //dienu starpiba

    return timeDifferenceInDays;
}



test("test 1",function () {
    const actual = betweenDays("2020-04-20","2020-04-21");
    const expected = 1;
    assertEquals(actual,expected);
});
test("test 2",function () {
    const actual = betweenDays("2020-03-20","2020-04-19");
    const expected = 29;
    assertEquals(actual,expected);
});
test('test 3',function () {
    const actual = betweenDays("1999-01-19","2020-01-19");
    const expected = 7670;
    assertEquals(actual,expected);
});
test("test 4",function () {
    const actual = betweenDays("1996-08-29", "2020-08-29");
    const expected = 8766;
    assertEquals(actual,expected);
});
test("test 5",function () {
    const actual = betweenDays("2019-01-01","2020-01-01");
    const expected = 365;
    assertEquals(actual,expected);
});
runKUnit();
