var React = require('react');

var Message = ({temp, location}) => {
  return (
    <h3>It's {temp} in {location}.</h3>
  )
};

module.exports = Message;