import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions'

let store = createStore(todoApp)

console.log(store.getState())

console.log(store.dispatch(addTodo('message')))

console.log(store.getState())

class Content extends Component{
	render() {
		return (
			<h2>asfasfsa</h2>
		)
	}
}

ReactDOM.render(
	<Content />,
	document.getElementById('root')
)