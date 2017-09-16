import React, { Component } from 'react';
import Child1 from '../Child1';
import Child2 from '../Child2';
import Child3 from '../Child3';

class Umbrella extends Component {

  constructor(props) {
    super(props);

    this.setChild1Ref = this.setChild1Ref.bind(this);
    this.setChild2Ref = this.setChild2Ref.bind(this);
    this.setChild3Ref = this.setChild3Ref.bind(this);

    // this.posts = this.props.posts; // In reality

    this.posts = [
      {
        id: 1,
        content: 'Post 1'
      },
      {
        id: 2,
        content: 'Post 2'
      },
      {
        id: 3,
        content: 'Post 3'
      }
    ];
  }

  setChild1Ref(ref) {
    this.child1 = ref;
  }

  setChild2Ref(ref) {
    this.child2 = ref;
  }

  setChild3Ref(ref) {
    this.child3 = ref;
  }

  onSelectPost(id) {
    // find selected post
    var post = this.posts.find((p) => { return p.id = id; });

    this.child2.setState({
      post: post
    });
  }

  onPostEdited(content) {
    this.child3.setState({
      content: content
    });
  }

  render() {
    return (
      <div>
        <Child1 posts={this.posts} onSelectPost={this.onSelectPost} ref={this.setChild1Ref}/>
        <Child2 onPostEdited={this.onPostEdited} ref={this.setChild1Ref}/>
        <Child3 ref={this.setChild1Ref}/>
      </div>
    );
  }
}

export default Umbrella;