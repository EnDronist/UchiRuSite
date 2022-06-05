import styled from 'styled-components';
import WeekFieldLine from './WeekFieldLine';

const Wrapper = styled.div`
	width: -webkit-fill-available;
	flex-direction: column;
	padding-top: 6px;
`;

export default function WeekField({ references }) {
	let selectedEntry = null;
	const changeSelectedEntry = entry => {
		if (selectedEntry)
			selectedEntry.setSelected(false);
		selectedEntry = entry;
	};
	const weekField = references.calendarField.weekField = {};
	weekField.getSelectedEntry = () => selectedEntry;
	weekField.lines = [];
	return (
		<Wrapper>
			{[...Array(24).keys()].map(elem =>
				<WeekFieldLine key={elem}
					references={references}
					hour={elem}
					changeSelectedEntry={changeSelectedEntry} />)}
		</Wrapper>
	);
}