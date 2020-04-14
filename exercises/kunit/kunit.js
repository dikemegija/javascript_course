/* 1 . Funkcija test(argumenti)
        assert Equals(argumenti)
       run Kunit()
       module ir speciala peremenaja/export
 */
const allTests = [];

function test(name, f) {
    allTests.push({
        name: name, f: f
    });
}

function assertEquals(a, b) {
    if (a != b) {
        /*met kludu throw*/
        throw a + " is not equals " + b
    }
}

function runKUnit() {
    for (let test of allTests) {
        try {
            test.f();
            console.log("Test: " + test.name + ". Result: OK");
        } catch (e) {
            console.error("Test: " + test.name + ". Result: " + e);
        }

    }
}

module.exports = {
    test: test,
    assertEquals: assertEquals,
    runKUnit: runKUnit,
};


