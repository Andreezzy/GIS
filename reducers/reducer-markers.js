export default function (state = [], action) {
	switch(action.type) {
		case "FETCH_MARKERS": {
			return action.payload
		}
	}
	return state;
}