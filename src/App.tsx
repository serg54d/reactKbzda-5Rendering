import React from 'react';
import './App.css';
import { Accordion } from './Accordion';
import { Rating } from './Rating';
import { OnOff } from './OnOff';
import { UnControlledAccordion } from './UnControlledAccordion';
import { UnControlledAccordion2 } from './UnControlledAccordion2';
import { UnControlledRating } from './UnControlledRating';
// import { Cube } from './OnOff';

function App() {
	return (
		<div className="App">
			{/* <Accordion titleValue='Title' collapsed={false} />
			<Accordion titleValue='Title2' collapsed={false} />
			<Rating value={1} />
			<Rating value={2} />
			<Rating value={3} />
			<Rating value={4} />
			<Rating value={5} /> */}
			<OnOff />
			<UnControlledAccordion />
			<UnControlledAccordion2 titleValue='заголовок2' />
			<UnControlledRating />
			{/* <OnOff />
			<OnOff  /> */}
		</div>
	);
}

export default App;
