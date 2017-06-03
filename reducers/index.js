import { combineReducers } from 'redux';
import PlaceReducer from './reducer-places';
import ActivePlaceReducer from './reducer-active-place';
import SytesReducer from './reducer-sytes';
import MarkersReducer from './reducer-markers';

const allReducers = combineReducers({
	places: PlaceReducer,
	activePlace: ActivePlaceReducer,
	sytes: SytesReducer,
	markers: MarkersReducer,
	ratita: function(state="Paola MOuse", action) { return state}
});

export default allReducers