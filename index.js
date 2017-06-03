import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
//import loadGoogleMapsAPI from 'load-google-maps-api';
import allReducers from './reducers';
import App from './components/index';
//import {AddSyteOnPlace,selectPlace,AddPlace} from './actions/index';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));
console.log(store.getState());
store.subscribe(()=>console.log(store.getState()))

//store.dispatch(AddSyteOnPlace({id: 1, name: "Hoteles"},{id:5,name:"YEAAA"}))
//store.dispatch(AddPlace({name:"ANDRES"}))


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("root")
);