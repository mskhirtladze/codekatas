var assert = require('../unit-testing/assert');
var runner = require('../unit-testing/runner');
var convert = require('./toArabic');
var c = require('./convert.js');

runner.run({
	should_convert_to_arabic: function(){
		assert.equal(1, convert.toArabic('I'));
		assert.equal(2, convert.toArabic('II'));
		assert.equal(3, convert.toArabic('III'));
		assert.equal(5, convert.toArabic('V'));
		assert.equal(4, convert.toArabic('IV'));
		assert.equal(9, convert.toArabic('IX'));
		assert.equal(10, convert.toArabic('X'));
		assert.equal(50, convert.toArabic('L'));
		assert.equal(40, convert.toArabic('XL'));
		assert.equal(90, convert.toArabic('XC'));
		assert.equal(100, convert.toArabic('C'));
		assert.equal(500, convert.toArabic('D'));
		assert.equal(400, convert.toArabic('CD'));
		assert.equal(900, convert.toArabic('CM'));
		assert.equal(1000, convert.toArabic('M'));
	}
});