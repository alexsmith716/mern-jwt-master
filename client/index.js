
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import history from '../shared/src/router/history';

import App from '../shared/src/components/App/App';
import Header from '../shared/src/components/Header/Header';
import Signin from '../shared/src/components/Signin/Signin';
import Signup from '../shared/src/components/Signup/Signup';
import Signout from '../shared/src/components/Signout/Signout';
import Feature from '../shared/src/components/Feature/Feature';
import RequireAuth from '../shared/src/hoc/RequireAuth/RequireAuth';
import reducers from '../shared/src/store/reducers';
import { AUTH_USER } from '../shared/src/store/Authentication/authentication.types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// Update application state with user's authentication status
// before the application is rendered
const token = localStorage.getItem('token');

console.log('>>>> client > INDEX.js <<<< loaded');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

console.log('>>>> client > INDEX.js <<<< token?': token);
console.log('>>>> client > INDEX.js <<<< AUTH_USER?': AUTH_USER);
console.log('>>>> client > INDEX.js <<<< store': store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/signout" component={Signout} />
            <Route path="/feature" component={RequireAuth(Feature)} />
            <Route render={() => <p>Route not found!</p>} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container-fluid'));
