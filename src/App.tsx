import React from 'react';
import './App.css';
import { Accordion } from './Accordion';
import { Rating } from './Rating';
// import { Cube } from './OnOff';

function App() {
	return (
		<div className="App">
			<Accordion titleValue='Title' collapsed={false} />
			<Accordion titleValue='Title2' collapsed={false} />
			<Rating value={1} />
			<Rating value={2} />
			<Rating value={3} />
			<Rating value={4} />
			<Rating value={5} />
		</div>
	);
}

export default App;
