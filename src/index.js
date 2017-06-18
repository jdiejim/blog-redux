import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, devTools)}>
    <Router>
      <section>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route exact path="/" component={PostsIndex} />
        </Switch>
      </section>
    </Router>
  </Provider>
  , document.querySelector('.container'));
