var AssertError = require("./assertError");

exports.equal = function(expected, actual, equalOp){
	var result;

	if(equalOp){
		result = equalOp(expected, actual);
	}else {
		result = expected === actual;
	}

	if(!result){
		throw new AssertError(expected, actual, 'equal failed');
	}
}

exports.throw = function(f){	
	try { f(); } catch (e) { return e; }

	throw new AssertError ('exception was expected', 'no exception thrown', 'throw failed');
}