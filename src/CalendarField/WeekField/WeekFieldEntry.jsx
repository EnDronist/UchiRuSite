import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
	flex-grow: 1;
	border-right: 1px solid lightgray;
	border-bottom: 1px solid lightgray;
	&:last-child {
		border-right: none;
	}
	& > div {
		width: -webkit-fill-available;
		height: -webkit-fill-available;
		background-color: white;
		border: 1px solid white;
		&.filled {
			background-color: #F0F0FF;
		}
		&.selected {
			background-color: #B0B0FF;
		}
	}
`;

export default function WeekFieldEntry({ references, hour, dayOfWeek, changeSelectedEntry }) {
	// State
	const [filled, setFilled] = useState(false);
	const [selected, setSelected] = useState(false);
	// References
	const currentHour = references.calendarField.weekField.lines[hour];
	const currentDayOfWeek = currentHour[dayOfWeek] = {};
	currentDayOfWeek.getFilled = () => filled;
	currentDayOfWeek.setFilled = setFilled;
	currentDayOfWeek.getSelected = () => selected;
	currentDayOfWeek.setSelected = setSelected;
	currentDayOfWeek.getHour = () => hour;
	currentDayOfWeek.getDayOfWeek = () => dayOfWeek;
	// Methods
	const handleClick = event => {
		changeSelectedEntry(currentDayOfWeek);
		setSelected(true);
		references.bottomPanel.setIsCurrentEntryFilled(filled);
	};
	// Component
	return (
		<Wrapper onClick={handleClick}>
			<div className={
				(((selected && "selected") || "") + " " + ((filled && "filled") || "")).trim()
			}></div>
		</Wrapper>
	);
}