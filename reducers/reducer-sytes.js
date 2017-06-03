export default function (state = [], action) {
	switch(action.type) {
		case "SET_SYTE": {
			return action.payload.sytes
		}
		case "ADD_SYTE": {
			return [...state, {name: action.payload.name}]
		}
		default:
			return state
	}
	return state;
}