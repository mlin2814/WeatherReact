var React = require('react');
var Form = require('Form');
var Message = require('Message');

var Weather = React.createClass({
	render: function() {
		return(
			<div>
				<h3>Weather Component</h3>	
				<Form/>
				<Message/>
			</div>
		);
	}
});

module.exports = Weather;