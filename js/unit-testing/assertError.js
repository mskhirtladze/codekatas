function AssertError(expected, actual, message) {
    this.expected = expected;
    this.actual = actual;
    this.message = (message || "assert error");
}
AssertError.prototype = new Error();

module.exports = AssertError; 