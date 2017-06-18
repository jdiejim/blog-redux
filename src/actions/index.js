import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../constants/action-types';
import { URL, getURLWithID } from '../constants/endpoints';
import axios from 'axios';

export function fetchPosts() {
  const request = axios.get(URL);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios.post(URL, values)
                       .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(getURLWithID(id));

  return {
    type: FETCH_POST,
    payload: request
  }
}
