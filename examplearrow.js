// var names = ['Mike', 'Matt', 'Megan'];

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var person = {
// 	name: 'Matthew',
// 	greet: function(){
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name);
// 		});
// 	}
// };

// person.greet();

function add(a, b){
	return a + b;
}

var addStatement = (a, b) => {
	return a + b;	
}
console.log(addStatement(1, 3));


var addExpression = (a, b) => a + b;
console.log(addExpression(3, 2));

