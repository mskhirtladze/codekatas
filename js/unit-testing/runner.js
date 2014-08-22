var AssertError = require("./assertError");

exports.run = function(tests){
	var passed = 0,
		failed = 0;

	for(var testName in tests){
		try{
			tests[testName]();
			passed++;
		} catch (e){
			if (e instanceof AssertError) {
				failed++;
				console.log('FAIL - ' + testName);
				for(var p in e){
					console.log(p + ': ' + JSON.stringify(e[p]));
				}			

				console.log('----------------------------------------------');
			}else {
				throw e;
			}
		}
	}

	console.log('total # of tests: ' + (passed + failed) + '\npassed: ' + passed + ' failed: ' + failed + '\n\n');
}