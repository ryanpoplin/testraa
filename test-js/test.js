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

	

}());