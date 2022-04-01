import { combineReducers } from 'redux';
import userReduser from './user/user-reduser.js';

const rootReduse = combineReducers({
  user: userReduser,
 
});

export default rootReduse;
