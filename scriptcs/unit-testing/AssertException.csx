public class AssertException : Exception {
	public object Expected { get; private set; }
	public object Actual { get; private set; }

	public AssertException(object expected, object actual, string message) : base(message) {
	    this.Expected = expected;
	    this.Actual = actual;
	}
}