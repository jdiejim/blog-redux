import { FETCH_POSTS } from '../constants/action-types';
import { URL_GET } from '../constants/endpoints';
import axios from 'axios';

export function fetchPosts() {
  const request = axios.get(URL_GET);
  
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
