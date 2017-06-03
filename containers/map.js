import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadGoogleMapsAPI from 'load-google-maps-api';
import { AddSyteOnPlace, setSyte, AddSyte, insertSyte, loadMarkers } from '../actions/index';
import axios from 'axios';

var key="AIzaSyBUpC2b-rK-O6e9Wkew293Da0Q3Xgs_QDc"
var google;
loadGoogleMapsAPI(key).then((googleMaps) => {
	google = googleMaps;
  console.log(googleMaps); //=> Object { Animation: Object, ... 
}).catch((err) => {
  console.error(err);
});

const divStyle = {
  height: 350,
  width: 700,
};

var map;

function placeMarker(num,location) {
  new google.Marker({
    position: location,
    map: map
  });
}

class Map extends React.Component {
	load() {
		var myLatlng = {lat: -15.8369907, lng: -70.0211613};
		map = new google.Map(document.getElementById("map"), {
	    center: myLatlng,
	    zoom: 14
  	});
  	axios.get('http://localhost:4000/places.json')
			.then((response) => {
				for(var i = 0; i < response.data.length; i++){
					placeMarker(i,{lat: response.data[i].lat, lng: response.data[i].lng})
					console.log("YA AGREGUE: ", response.data[i]);
				}
			})
	}
	loadMarkers() {
		axios.get('http://localhost:4000/places.json')
			.then((response) => {
				for(var i = 0; i < response.data.length; i++){
					placeMarker(i,{lat: parseInt(response.data[i].lat), lng: parseInt(response.data[i].lng)})
					console.log("YA AGREGUE");
				}
			})
	}
	render() {
		return (
			<div>
				<h2>React MAP</h2>
				<button onClick={this.load}>Load Map!</button>
				<button onClick={this.loadMarkers}>Load Markers!</button>
				<div style={divStyle} id="map"></div>
			</div>
		)
	}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({loadMarkers: loadMarkers}, dispatch);
}

export { map, google };
export default connect(matchDispatchToProps)(Map);