import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './Authentication/authentication.reducer';

console.log('>>>> client > reducers.js <<<< loaded');

const rootReducer = combineReducers({
  form,
  auth,
});

console.log('>>>> client > reducers.js <<<< auth: ', auth);

export default rootReducer;
