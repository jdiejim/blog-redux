import React, { Component } from 'react';

class PostsNew extends Component {
  render() {
    return (
      <form>
        <label>
          Title:
          <input />
        </label>
        <label>
          Categories:
          <input />
        </label>
        <label>
          Contents:
          <input />
        </label>
        <button>Save</button>
        <button>Cancel</button>
      </form>
    )
  }
}

export default  PostsNew;
