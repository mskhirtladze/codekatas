var assert = require('../unit-testing/assert');
var runner = require('../unit-testing/runner');
var add = require('./add').add;

runner.run({
	should_calculate: function(){
		assert.equal(0, add(''));
		assert.equal(1, add('1'));
		assert.equal(3, add('1,2'));
		assert.equal(6, add('1,2,3'));
		assert.equal(6, add('1\n2,3'));
		
		var ex = assert.throw(function() {
			add('1,\n');
		});
		assert.equal('invalid input', ex);

		var ex = assert.throw(function(){
			add('-1,-2');
		});
		assert.equal('negative not allowed: ' + '-1, -2', ex);

		assert.equal(2, add('2,1001'));
	}
})