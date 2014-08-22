IEnumerable<int> primeFactors(int n) {
	for(int factor = 2; n > 1; factor++)
		for(; n % factor == 0; n /= factor)
			yield return factor;
}