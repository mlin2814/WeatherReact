var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function() {
		return(
			<div>
				<h2>Nav Component</h2>	
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About the App</Link>
				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example Work</Link>
			</div>
		);
	}
});

module.exports = Nav;