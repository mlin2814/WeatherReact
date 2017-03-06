function getTempCallback(location, callback) {
	callback(undefined, 78);
	callback('City not found');
}

getTempCallback('Boston', function(err, temp){
	if (err) {
		console.log('error', err);
	} else {
		console.log('success', temp);
	}
});


function getTempPromise(location){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(79);
			reject('City not found');	
		}, 1000);
	});
}

getTempPromise('Boston').then(function (temp) {
	console.log('Promise success', temp);
}, function (err){
	console.log('Promise error', err);
})

if (typeof 7 === 'number') {}

function addPromise(a, b){
	return new Promise(function(resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else{
			reject('Check your values again');	
		}
	});
}

addPromise(7, 8).then(function(sum){
	console.log('Promise success', sum);
}, function(err){
	console.log('Promise error', err);
});

addPromise('Slevin', 7).then(function(sum){
	console.log('Promise success', sum);
}, function(err){
	console.log('Promise error', err);
});