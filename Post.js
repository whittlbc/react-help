import React, { Component } from 'react';

class Post extends Component {

  constructor(props) {
    super(props);

    this.selectPost = this.selectPost.bind(this);

    this.state = {
      content: this.props.content,
      id: this.props.id
    };
  }

  selectPost() {
    if (this.props.onSelectPost) {
      this.props.onSelectPost(this.state.id);
    }
  }

  render() {
    return (
      <div onClick={this.selectPost}>{'Post ' + this.state.id}</div>
    );
  }
}

export default Post;