var React = require('react');

var Button = function(props){
  return <button onClick={props.onClick}>{props.text}</button>
};

module.exports = Button;
