export default function (state = null, action) {
	switch(action.type) {
		case "SELECT_PLACE": {
			return action.payload;
			break;
		}
	}
	return state;
}