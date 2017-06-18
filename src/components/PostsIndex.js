import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { objToArray } from '../helpers/type-transform';

const PostsContainer = styled.section`
  margin: 10px 0;
  h3, p {
    margin: 0;
  }
`

const Post = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin: 5px 0;
  border: 1px solid #EDEDED;
  border-radius: 10px;
`

const Title = styled.h3`
  margin: 10px 0 20px;
`

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const posts = objToArray(this.props.posts);
    return posts.map(p => (
      <Post key={p.id}>
        <h3>{p.title}</h3>
        <p>{p.content}</p>
      </Post>
    ));
  }

  render() {
    if (!this.props.posts) {
      return <div>loading...</div>
    }

    return (
      <section>
        <Title>Posts</Title>
        <PostsContainer>
          { this.renderPosts() }
        </PostsContainer>
      </section>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts });
const connectComponent = connect(mapStateToProps, { fetchPosts });

export default connectComponent(PostsIndex);
