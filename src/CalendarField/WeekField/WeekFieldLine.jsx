import styled from 'styled-components';
import WeekFieldEntry from './WeekFieldEntry';

const Wrapper = styled.div`
	flex-direction: row;
	min-height: 36px;
	max-height: 36px;
	&:last-child > * {
        border-bottom: none;
    }
`;

export default function WeekFieldLine({ references, hour, changeSelectedEntry }) {
	const lines = references.calendarField.weekField.lines;
	lines[hour] = [];
	return (
		<Wrapper>
			{[...Array(7).keys()].map(elem =>
				<WeekFieldEntry key={elem}
					references={references}
					hour={hour}
					dayOfWeek={elem}
					changeSelectedEntry={changeSelectedEntry} />)}
		</Wrapper>
	);
}