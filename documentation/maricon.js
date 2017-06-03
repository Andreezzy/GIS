import { combineReducers, createStore } from 'redux'

function counter(state = 0, action){
	switch (action.type){
		case "INCREMENT":
			return state + action.number
		case "DECREMENT":
			return state - action.number
	}
	return state
}

function visibilityFilter(state = "SHOW_ALL", action){
	switch (action.type) {
		case "SET_VISIBILITY_FILTER":
			return action.filter
		default:
			return state
	}
}

function todos(state = [], action){
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case "COMPLETE_TODO":
			return state.map((todo, index) => {
				if(index === action.index){
					return Object.assign({}, todo, {
						completed: true
					})	
				}
				return todo
			})
		default:
			return state
	}
}

let reducer = combineReducers({
	visibilityFilter,
	todos
})

let store = createStore(reducer)

store.subscribe(() =>
	console.log(store.getState())
)

function agregar(text){
	return {type: "ADD_TODO", text}
}

store.dispatch(agregar("Hola"))
store.dispatch({type: "ADD_TODO", text: "Other text"})
store.dispatch({type: "ADD_TODO", text: "Other text 2"})
store.dispatch({type: "COMPLETE_TODO", index: 0})
store.dispatch({type: "SET_VISIBILITY_FILTER", filter: 0})