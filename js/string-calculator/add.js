exports.add = function (input) {
	if(!input) return 0;

	var sum = 0;
	var negative = [];

	input.split(/[\n,]/).forEach(function(n) {
		if(!n) throw 'invalid input';
		
		var number = parseInt(n);
		
		if(number < 0) negative.push(number);
		if(number <= 1000) sum += number;
	});

	if(negative.length > 0) {
		var message = '';
		negative.forEach( function(n) {
			message += ', ' + n;
		})
		throw 'negative not allowed: ' + message.substring(2, message.length);
	}

	return sum;
}