var pl=[
	{
		id: 1,
		name: "Hoteles",
		places: [
			{
				id: 1,
				name: "Hotel Perros",
				lat: 345.767,
				lng: 324.323
			},
			{
				id: 2,
				name: "Hotel Gatos",
				lat: 345.344,
				lng: 225.323
			}
		]
	},
	{
		id: 2,
		name: "Restaurants",
		places: []
	},
	{
		id: 3,
		name: "Plazas",
		places: []
	},
	{
		id: 4,
		name: "Parques",
		places: []
	}
]

export default function (state = [], action) {
	switch(action.type) {
		case "FETCH_CATEGORY": {
			return action.payload
		}
		case "ADD_PLACE": {
			return [
								...state,
								syte(undefined, action)
			];
		}
		case "ADD_SYTE_ON_PLACE": {
			return state.map(p => syte(p, action))
		}
		default:
			return state
	}
	return state;
}
const syte = (state={}, action) => {
	switch(action.type){
		case 'ADD_PLACE':
			return {
				id: action.payload.id,
				name: action.payload.name,
				places: []
			}
		case 'ADD_SYTE_ON_PLACE':
			if (state.id !== action.place.id) {
				return state;
			}
			return {
				...state,
				places: [
					...state.places,
					action.syte
				]
			};
	}
}