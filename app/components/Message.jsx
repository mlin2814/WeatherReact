var React = require('react');

var Message = React.createClass({	
	render: function () {
    var {temp, location} = this.props;

    return (
      <h3>It's {temp} in {location}.</h3>
    )
  }
});

module.exports = Message;