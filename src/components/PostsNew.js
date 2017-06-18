import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin: 10px 0;
    font-size: 20px;
    text-transform: capitalize;
  }
  span {
    color: #d77c7c;
  }
`
const InputText = styled.input`
  padding: 10px;
  border: 1px solid ${props => props.errorMsg ? '#d77c7c' : '#EDEDED'};
  border-radius: 10px;
  &:focus {
    outline: none;
    border: 1px solid #00b2ff;
  }
`

const SubmitButton = styled.button`
  margin: 10px 10px 10px 0;
  padding: 10px 20px;
  background-color: #0b966d;
  border: none;
  border-radius: 10px;
  color: #FFF;
`

const StyledLink = styled(Link)`
  width: 200px;
  margin: 10px 10px 10px 0;
  padding: 14px;
  background-color: #d77c7c;
  border: none;
  border-radius: 10px;
  color: #FFF;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #FFF;
  }
`

class PostsNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const errorActive = touched && error ? true : false;

    return (
      <InputWrapper>
        <label>{field.label}</label>
        <InputText
          errorMsg={errorActive}
          type="text"
          {...field.input}
        />
        <span>{touched ? error : ''}</span>
      </InputWrapper>
    )
  }

  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field
            name="title"
            label="title"
            component={this.renderField}
           />
          <Field
            name="categories"
            label="categories"
            component={this.renderField}
           />
          <Field
            name="content"
            label="post content"
            component={this.renderField}
           />
           <SubmitButton>Save Post</SubmitButton>
           <StyledLink to="/">Cancel</StyledLink>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const { title, categories, content } = values;
  const errors = {};

  if (!title) {
    errors.title = 'Enter a title!';
  }

  if (!categories) {
    errors.categories = 'Enter some categories!';
  }

  if (!content) {
    errors.content = 'Enter some content!';
  }

  return errors;
}

export default reduxForm({
  validate, form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
