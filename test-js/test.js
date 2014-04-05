(function() {

	var newObject = new Object();
	var newObj = {};
	
	console.log(newObject, newObj);
	
	newObject.appName = 'testraa'
	var appName = newObject.appName;
	
	console.log(appName);
	
	newObj['appTitle'] = 'Testraa';
	var appTitle = newObj['appTitle'];
	
	console.log(appTitle);

	var nestedTech = {
		favLang: 'JavaScript',
		favTools: {
			one: 'Brunch',
			two: 'Bower',
			three: 'CoffeeScript'
		}
	};

	console.log(nestedTech.favTools.three);

	function average(x, y) {
		var avg = (x + y) / 2;
		return avg;
	}

	console.log(average());
	console.log(average(20, 3));

	function averageArgs() {
		var sum = 0;
		for (var i = 0, j = arguments.length; i < j; i += 1) {
			sum += arguments[i];
		}
		return sum / arguments.length;
	}

	console.log(averageArgs(3, 6, 9, 12));

	

}());