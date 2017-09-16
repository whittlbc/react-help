import React, { Component } from 'react';

class Child3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content
    };
  }

  render() {
    return (
      <div>{this.state.content}</div>
    );
  }
}

export default Child3;