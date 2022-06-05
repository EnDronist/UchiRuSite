import styled from 'styled-components';

const Wrapper = styled.div`
	width: auto;
	height: 64px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: 24px;
	font-family: Arial;
	background-color: white;
	& > .app-name {
		font-size: 20px;
	}
	& > .add-button {
		width: 64px;
		height 64px;
		font-family: Material Icons;
		font-size: 24px;
		text-align: center;
		line-height: 64px;
		color: red;
		user-select: none;
		cursor: pointer;
	}
`;

export default function AppHeader({ references }) {
	const handleAddButtonClick = event => {
		// Asking user for date
		var answer = prompt("Enter event time:\nYYYY-MM-DD HH:mm::ss");
		var dateString = Date.parse(answer);
		if (isNaN(dateString)) return;
		var date = new Date(dateString);
		if (date.getFullYear() !== 2019 || date.getMonth() !== 2
			|| date.getDate() < 25 || date.getDate() > 31
		) return;
		// Filling founded entry
		var dayToDayOfWeek = date.getDay() === 0 ? 6 : date.getDay() - 1;
		const entry = references.calendarField.weekField.lines[date.getHours()][dayToDayOfWeek];
		entry.setFilled(true);
		var selectedEntry = references.calendarField.weekField.getSelectedEntry();
		// Updating "Delete" button
		if (selectedEntry && selectedEntry.getHour() === entry.getHour()
			&& selectedEntry.getDayOfWeek() === entry.getDayOfWeek()
		) references.bottomPanel.setIsCurrentEntryFilled(true);
	}
	return (
		<Wrapper>
			<span className="app-name">Interview Calendar</span>
			<span className="add-button" onClick={handleAddButtonClick}>add</span>
		</Wrapper>
	);
}