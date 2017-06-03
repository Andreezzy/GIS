import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { map, google } from './map';
import { AddSyteOnPlace, setSyte, AddSyte, insertSyte } from '../actions/index';

class Place extends Component {
	constructor(props){
		super(props);
		this.state = {inputValue: ''};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(evt){
		this.setState({inputValue: evt.target.value});
	}
	update(place){
		this.props.setSyte(place);
	}
	addMarker(place){
		var position;
		var a = this;
		google.event.addListener(map, 'click', function(event) {
			//placeMarker(event.latLng);
			position = event.latLng;
			var marker = new google.Marker({
				position: event.latLng,
				map: map
			});
			//a.props.AddSyteOnPlace(place,{name:a.state.inputValue, lat:position.lat(), lng: position.lng()});
			a.props.insertSyte(place,{name:a.state.inputValue, lat:position.lat(), lng: position.lng()})
			//a.update(place);
			a.props.AddSyte({name:a.state.inputValue, lat:position.lat(), lng: position.lng()});
		});
	}
	listPlaces(placeSelect){
		if (this.props.sytes.length == 0) {
			return (<h3>No hay lugares agregados</h3>)
		}
		//this.update(placeSelect);
		//var nextKey = this.props.sytes.length + 1;
		//console.log("NEXT KEY IS: ", nextKey);
		return this.props.sytes.map((place) => {
			return (
				<li key = {place.id} >
					<div>
						<h4>{place.name}</h4>
						<h6>{place.lat}</h6>
						<h6>{place.lng}</h6>
					</div>
				</li>
			)
		})
	}
	render() {
		if (!this.props.place) {
			return (<h4>Select a place...</h4>);
		}
		return (
			<div>
				<h2>Id: {this.props.place.id}</h2>
				<h3>Name: {this.props.place.name}</h3>
				<div>
					<ul>
						{this.listPlaces(this.props.place)}
					</ul>
					<input type="text"
						placeholder="Ingrese nombre"
						value={this.state.inputValue}
						onChange={this.handleChange}>
					</input>
					<button onClick={()=>this.addMarker(this.props.place)}>Agregar Lugar</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		place: state.activePlace,
		sytes: state.sytes
	}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({AddSyteOnPlace: AddSyteOnPlace, setSyte: setSyte, AddSyte: AddSyte, insertSyte: insertSyte}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Place)