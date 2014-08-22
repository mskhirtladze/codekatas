var assert = require('../unit-testing/assert');
var runner = require('../unit-testing/runner');
var convert = require('./toRoman');

runner.run({
	should_convert_to_roman: function(){
		assert.equal('I', 		convert.toRoman(1));
		assert.equal('II', 		convert.toRoman(2));
		assert.equal('III', 	convert.toRoman(3));
		assert.equal('IV', 		convert.toRoman(4));
		assert.equal('V', 		convert.toRoman(5));
		assert.equal('IX', 		convert.toRoman(9));
		assert.equal('X', 		convert.toRoman(10));
		assert.equal('XL',	 	convert.toRoman(40));
		assert.equal('L', 		convert.toRoman(50));
		assert.equal('XC', 		convert.toRoman(90));
		assert.equal('C', 		convert.toRoman(100));
		assert.equal('CD', 		convert.toRoman(400));
		assert.equal('D', 		convert.toRoman(500));
		assert.equal('CM', 		convert.toRoman(900));
		assert.equal('M', 		convert.toRoman(1000));
		assert.equal('MMMCMXLIX', convert.toRoman(3949));
	}
});