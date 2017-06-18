import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../constants/action-types';
import { arrayToObj, cloneObjOmitKey } from '../helpers/type-transform';

function PostsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return arrayToObj(action.payload.data);
    case DELETE_POST:
      return cloneObjOmitKey(state, action.payload);
    default:
      return state;
  }
}

export default PostsReducer;
