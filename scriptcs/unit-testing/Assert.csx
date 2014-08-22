#load "AssertException.csx"

public class Assert {
	public static void Equal<T> (T expected, T actual, Func<T, T, bool> equals = null) {
		Func<bool> defaultEquals = () => EqualityComparer<T>.Default.Equals(expected, actual);
		
		var pass = equals != null && equals(expected, actual) || defaultEquals();

		if(!pass)
			throw new AssertException(expected, actual, "equal failed");
	}

	public static Exception Throw (Action action) {
		try {
		    action();
		} catch (Exception ex) {
		    return ex;
		}

		throw new AssertException("exception was expected", "no exception happened", "throw failed");
	}
}