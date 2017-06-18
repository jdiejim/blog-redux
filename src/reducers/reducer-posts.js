import { FETCH_POSTS } from '../constants/action-types';
import { arrayToObj } from '../helpers/type-transform';

function PostsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return arrayToObj(action.payload.data);
    default:
      return state;
  }
}

export default PostsReducer;
