#load "AssertException.csx"
#r "System.Web.Extensions"

using System.Web.Script.Serialization;

public class TestRunner {
	public static void Run(IDictionary<string, Action> tests) {
		var passed = 0;
		var	failed = 0;

		foreach (var testName in tests.Keys) {
		    try {
		        tests[testName]();
		        passed += 1;
		    } catch (AssertException ex) {
		    	failed += 1;
		        Console.WriteLine("    FAIL: {0}", testName);

		       	var serializer = new JavaScriptSerializer();
		       	Console.WriteLine("expected: {0}", serializer.Serialize(ex.Expected));
		       	Console.WriteLine("  actual: {0}", serializer.Serialize(ex.Actual));
		       	Console.WriteLine(" message: {0}", ex.Message);
		        Console.WriteLine("------------------------------------------------");
		    }
		}

		Console.WriteLine("\ntotal # of tests {0} \npassed - {1} | failed - {2}\n", 
			(passed + failed), passed, failed);
	}
}