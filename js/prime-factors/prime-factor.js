exports.of = function(n){
	var factors = [];
	
	for(var factor = 2; n && n > 1; factor ++) 
		for(; n % factor === 0; n /= factor) 
			factors.push(factor);

	return factors;
}