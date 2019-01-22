import { createStore, combineReducers, applyMiddleware } from 'redux';

import reporter from './middleware/reporter.js';
import contactReducer from './reducer/contact-reducer.js';

let reducers = combineReducers({
  contacts: contactReducer
});

export default () => createStore(reducers, applyMiddleware(reporter));
