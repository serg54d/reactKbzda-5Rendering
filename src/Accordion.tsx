import React from 'react';

type AccordionPropsType = {
	titleValue: string;
	collapsed: boolean;
}

type TitleType = {
	title: string
}



export function Accordion(props: AccordionPropsType) {
	console.log('Accordion rendering');
	return (
		<div>
			<AccordionTitle title={props.titleValue} />
			{!props.collapsed && <AccordionBody />}
		</div>
	)
	// if (props.collapsed === true) {
	// 	return (
	// 		<div>
	// 			<AccordionTitle title={props.titleValue} />
	// 		</div>
	// 	)
	// } else {
	// 	return (
	// 		<div>
	// 			<AccordionTitle title={props.titleValue} />
	// 			<AccordionBody />
	// 		</div>
	// 	)
	// }

}

function AccordionTitle(props: TitleType) {
	return <h3>{props.title}</h3>
}

function AccordionBody() {
	return <div>
		Lorem ipsum dolor sit amet.
	</div>
}