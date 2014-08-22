#load "../unit-testing/Assert.csx"
#load "../unit-testing/TestRunner.csx"

#load "code.csx"

TestRunner.Run(new Dictionary<string, Action> {
	{   "should produce prime factors", () => {

			Assert.Equal(new List<int> {}, primeFactors(1), Enumerable.SequenceEqual);
			Assert.Equal(new List<int> {2}, primeFactors(2), Enumerable.SequenceEqual);
			Assert.Equal(new List<int> {3}, primeFactors(3), Enumerable.SequenceEqual);
			Assert.Equal(new List<int> {2, 2}, primeFactors(4), Enumerable.SequenceEqual);
			Assert.Equal(new List<int> {5}, primeFactors(5), Enumerable.SequenceEqual);
			Assert.Equal(new List<int> {2, 3}, primeFactors(6), Enumerable.SequenceEqual);
			Assert.Equal(new List<int> {7}, primeFactors(7), Enumerable.SequenceEqual);
			Assert.Equal(new List<int> {2, 2, 2}, primeFactors(8), Enumerable.SequenceEqual);
			Assert.Equal(new List<int> {3, 3}, primeFactors(9), Enumerable.SequenceEqual);

			Assert.Equal(new List<int> {2, 3, 5, 5, 13, 19}, primeFactors(2 * 3 * 5 * 5 * 13 * 19),
			 	Enumerable.SequenceEqual);
		}
	},
});