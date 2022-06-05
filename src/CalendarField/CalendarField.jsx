import styled from 'styled-components';
import HoursField from './HoursField';
import WeekField from './WeekField/WeekField';

const Wrapper = styled.div`
	flex-direction: row;
	overflow-y: scroll;
	background-color: white;
`;

export default function CalendarField({ references }) {
	references.calendarField = {};
	return (
		<Wrapper>
			<HoursField />
			<WeekField references={references} />
		</Wrapper>
	);
}