import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';


const allReducers = combineReducers({
	users: UserReducer,
	activeUser: ActiveUserReducer,
	ratita: function(state="Paola MOuse", action) { return state}
});

export default allReducers