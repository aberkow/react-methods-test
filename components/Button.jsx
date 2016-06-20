var React = require('react');

class Button extends React.Component {
  constructor(){
    super();
  }
  render(){
    console.log(this.props, 'from button');
    return(
      <button onClick={this.props.onClick}>{this.props.text}</button>
    );
  }
}

// var Button = function(props){
//   return <button onClick={props.onClick}>{props.text}</button>
// };

module.exports = Button;
