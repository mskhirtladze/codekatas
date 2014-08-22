exports.toArabic = function(roman) {
	var digits = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	var determineSign = function(i){
		var current = roman[i];
		var next = roman[i + 1];
		if(digits[next] > digits[current])
			return -1;
		return 1;
	}

	var sum = 0;
	
	for( var i = 0; i < roman.length; i++)		
		sum += determineSign(i) * digits[roman[i]];

	return sum;
}