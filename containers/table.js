import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectPlace, setSyte, loadCategories } from '../actions/index';

class Table extends React.Component {
	componentWillMount() {
    this.props.loadCategories();
  }
	update(place){
		this.props.selectPlace(place);
		this.props.setSyte(place);
	}
	createListItems() {
		return this.props.places.map((place) => {
			return(
				<li
					key={place.id}
					onClick={() => this.update(place)}
				>
					{place.name}
				</li>
			);
		})
	}
	render() {
		return (
			<div>
				<ul>
					{this.createListItems()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		places: state.places,
		nombre: state.ratita
	}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPlace: selectPlace, setSyte: setSyte, loadCategories: loadCategories}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Table);