import { FETCH_POSTS, CREATE_POST } from '../constants/action-types';
import { URL } from '../constants/endpoints';
import axios from 'axios';

export function fetchPosts() {
  const request = axios.get(URL);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values) {
  const request = axios.post(URL, values);

  return {
    type: CREATE_POST,
    payload: request
  }
}
