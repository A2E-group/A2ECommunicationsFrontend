import { combineReducers } from 'redux';
import session from '../reducers/session';
import Snackbar from "../reducers/snakbarReducer"

const rootReducer = combineReducers({
  session,
  Snackbar
});

export default rootReducer;
