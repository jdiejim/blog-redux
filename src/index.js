import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PostsIndex from './components/PostsIndex';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, devTools)}>
    <Router>
      <Route exact path="/" component={PostsIndex} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
