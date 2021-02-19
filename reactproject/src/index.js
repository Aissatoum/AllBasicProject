import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props){
    super(props);
    this.state={
     model:"ford",
     brand:"mustang",
     color:"red",
     year:1967
    };
  }
  changeColor = () =>{
    this.setState({color:"blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>form color</button>
      </div>
    );
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));
