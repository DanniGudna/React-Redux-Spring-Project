import React, { Component } from 'react';
import { postAnswer } from '../actions';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions';

class Answer extends Component {
  constructor(props){
    super(props);
    this.state = { currentAnswer: ''};

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event){
    const value = event.target.innerHTML;
    postAnswer(value);

  }


  render() {

    return (
      <div>
        <button className= "answer right fade-in" onClick={this.handleClick}>
          {this.props.city}
        </button>
      </div>
    );
  }

}

export default connect(null, {postAnswer,fetchQuestion})(Answer);
