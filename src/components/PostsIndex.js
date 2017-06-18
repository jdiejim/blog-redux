import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>hello</div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts });
const connectComponent = connect(null, { fetchPosts });

export default connectComponent(PostsIndex);
