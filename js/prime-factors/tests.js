var assert = require('../unit-testing/assert');
var testRunner = require('../unit-testing/runner');
var PrimeFactor = require('./prime-factor');

var arrayEqual = function(a1, a2){
	if( a1.length !== a2.length )
		return false;

	for(var i in a1){
		if(a1[i] !== a2[i])
			return false;
	}

	return true;
}

testRunner.run({

	factors_of_empty: function(){
		assert.equal([], PrimeFactor.of(), arrayEqual);
	},

	factors_of_1: function(){
		assert.equal([], PrimeFactor.of(1), arrayEqual);
	},

	factors_of_2: function(){
		assert.equal([2], PrimeFactor.of(2), arrayEqual);
	},

	factors_of_3: function(){
		assert.equal([3], PrimeFactor.of(3), arrayEqual);
	},

	factors_of_4: function(){
		assert.equal([2, 2], PrimeFactor.of(4), arrayEqual);
	},

	factors_of_6: function(){
		assert.equal([2, 3], PrimeFactor.of(6), arrayEqual);
	},

	factors_of_8: function(){
		assert.equal([2, 2, 2], PrimeFactor.of(8), arrayEqual);
	},

	factors_of_9: function(){
		assert.equal([3, 3], PrimeFactor.of(9), arrayEqual);
	}
});