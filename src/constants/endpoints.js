export const API_KEY = '?key=jdj5';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
export const URL = `${ROOT_URL}posts/${API_KEY}`;
export const getURLWithID = (id) => `${ROOT_URL}posts/${id}${API_KEY}`;
