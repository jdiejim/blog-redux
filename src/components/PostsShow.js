import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPost, deletePost } from '../actions/index';

const DeleteButton = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: #eb6e6e;
  border: none;
  border-radius: 10px;
  color: #FFF;
`

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { deletePost, history, match } = this.props;
    const { id } = match.params;

    deletePost(id, () => history.push('/'));
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>loading</div>
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <DeleteButton
          onClick={this.onDeleteClick.bind(this)}
          >
          Delete Post
        </DeleteButton>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({ post: posts[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
