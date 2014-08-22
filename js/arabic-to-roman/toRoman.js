exports.toRoman = function (number){
	var digits = [
		{arabic: 1000, roman: 'M'},
		{arabic: 900, roman: 'CM'},
		{arabic: 500, roman: 'D'},
		{arabic: 400, roman: 'CD'},
		{arabic: 100, roman: 'C'},
		{arabic: 90, roman: 'XC'},
		{arabic: 50, roman: 'L'},
		{arabic: 40, roman: 'XL'},
		{arabic: 10, roman: 'X'},
		{arabic: 9, roman: 'IX'},
		{arabic: 5, roman: 'V'},
		{arabic: 4, roman: 'IV'},
		{arabic: 1, roman: 'I'},
	]	

	var roman = '';

	for (var d in digits) {
		var digit = digits[d];
		while(number >= digit.arabic) {
			roman += digit.roman;
			number -= digit.arabic;
		}
	}
	
	return roman;
}