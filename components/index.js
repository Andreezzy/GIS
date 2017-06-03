import React from 'react';
import Header from '../containers/header';
import Table from '../containers/table';
import Place from '../containers/place';
import Map from '../containers/map';


class App extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<Table />
				<Place />
				<Map />
			</div>
		)
	}
}

export default App;