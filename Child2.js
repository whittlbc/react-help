import React, { Component } from 'react';

class Child2 extends Component {

  constructor(props) {
    super(props);

    this.setTextareaRef = this.setTextareaRef.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      post: this.props.post || {}
    };
  }

  setTextareaRef(ref) {
    this.textarea = ref;
  }

  onChange() {
    // get value from this.textarea
    var value = 'myvalue';

    if (this.props.onPostEdited) {
      this.props.onPostEdited(value);
    }
  }

  render() {
    return (
      <textarea onChange={this.onChange} ref={this.setTextareaRef}>{this.state.post.content}</textarea>
    );
  }
}

export default Child2;