(function(){

	var animals = [];

	animals.push(
		{ name: 'cow', sound: 'moo' }, 
		{ name: 'sheep', sound: 'baaah' }, 
		{ name: 'dog', sound: 'arf' }
	);

	function seeAndSay() {
		animals.forEach(function(animal) {
			animal.color = 'grey';
			console.log("The " + animal.name + " says " + animal.sound + ", and is " + animal.color + "!");
		});
	};

	seeAndSay();

})();