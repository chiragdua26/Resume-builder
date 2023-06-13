
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ...yourOtherReducers } from './reducers';

const rootReducer = combineReducers({
  form: formReducer,
  ...yourOtherReducers,
});

const store = createStore(rootReducer);

export default store;
