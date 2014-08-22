#load "unit-testing/Assert.csx"
#load "unit-testing/TestRunner.csx"

TestRunner.Run(new Dictionary<string, Action> {
	{   "test 1", () => {
			Assert.Equal(1, 1);
		}
	},

	{   "test 2", () => {
			Assert.Equal(new List<int> {}, new List<int>(), Enumerable.SequenceEqual);
		}
	},
});