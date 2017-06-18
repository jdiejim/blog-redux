import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 10px;
    border: 1px solid #EDEDED;
    border-radius: 10px;
    &:focus {
      outline: none;
      border: 1px solid #00b2ff;
    }
  }
  label {
    margin: 10px 0;
    font-size: 20px;
    text-transform: capitalize;
  }
`

class PostsNew extends Component {
  renderField(field) {
    return (
      <InputWrapper>
        <label>{field.label}</label>
        <input
          type="text"
          {...field.input}
        />
      </InputWrapper>
    )
  }

  render() {
    return (
      <form>
        <div>
          <lable></lable>
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
        </div>
      </form>
    )
  }
}

const validate = values => {
}

export default reduxForm({ validate, form: 'PostsNewForm' })(PostsNew);
