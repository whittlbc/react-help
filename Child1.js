import React, { Component } from 'react';
import Post from './Post';

class Child1 extends Component {

  constructor(props) {
    super(props);

    this.getPosts = this.getPosts.bind(this);
    this.onSelectPost = this.onSelectPost.bind(this);

    this.state = {
      posts: this.props.posts || []
    };
  }

  getPosts() {
    return this.state.posts.map((p, i) => {
      return <Post key={i} onSelectPost={this.onSelectPost}>p.content</Post>;
    });
  }

  onSelectPost(id) {
    if (this.props.onSelectPost) {
      this.props.onSelectPost(id);
    }
  }

  render() {
    return (
      <ul>{this.getPosts()}</ul>
    );
  }
}

export default Child1;