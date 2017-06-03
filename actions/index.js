import axios from 'axios';

export const loadCategories = () => {
	return (dispatch, getState) => {
    axios.get('http://localhost:4000/categories.json')
					.then((response) => {
						dispatch( { type: "FETCH_CATEGORY", payload: response.data } )
					})
  }
}

export const loadMarkers = () => {
	return (dispatch, getState) => {
    axios.get('http://localhost:4000/places.json')
					.then((response) => {
						dispatch( { type: "FETCH_MARKERS", payload: response.data } )
					})
  }
}

export const insertSyte = (place, syte) => {
	return (dispatch, getState) => {
    axios.post('http://localhost:4000/places/', { name: syte.name, lat: syte.lat, lng: syte.lng, category_id: place.id })
					.then((response) => {
						dispatch( { type: "CREATE_CATEGORY" } )
					})
  }
}

export const selectPlace = (place) => {
	return {
		type: "SELECT_PLACE",
		payload: place
	}
};

export const setSyte = (place) => {
	return (dispatch, getState) => {
  axios.get('http://localhost:4000/categories/'+place.id+'.json')
				.then((response) => {
					dispatch( { type: "SET_SYTE", payload: response.data } )
				})
  }
};

export const AddSyte = (syte) => {
	return {
		type: "ADD_SYTE",
		payload: syte
	}
};

export const AddPlace = (place) => {
	console.log("You add a place: ", place);
	return {
		type: "ADD_PLACE",
		payload: place
	}
};

export const AddSyteOnPlace = (place, syte) => {
	return {
		type: "ADD_SYTE_ON_PLACE",
		place: place,
		syte: syte
	}
};