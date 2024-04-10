import React, { useState } from 'react';






export function OnOff() {
	let [on, setOn] = useState(false)

	const onOffBLockStyle = {
		display: "flex",
		gap: "5px",
		alignItems: "center"
	}
	const onStyle = {
		width: "30px",
		height: "20px",
		border: "2px solid black",
		backgroundColor: on ? "green" : "white"
	}
	const offStyle = {
		width: "30px",
		height: "20px",
		border: "2px solid black",
		backgroundColor: on ? "white" : "red"
	}
	const indicatorStyle = {
		width: "10px",
		height: "10px",
		borderRadius: "50%",
		border: "2px solid black",
		backgroundColor: on ? "green" : "red"
	}
	return (
		<div style={onOffBLockStyle}>
			<div style={onStyle} onClick={() => { setOn(true) }}>On</div>
			<div style={offStyle} onClick={() => { setOn(false) }}>Off</div>
			<div style={indicatorStyle}></div>
		</div>
	)
}

