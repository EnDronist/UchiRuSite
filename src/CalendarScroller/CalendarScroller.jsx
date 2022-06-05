import styled from 'styled-components';
import DayList from './DayList/DayList';
import Panel from './Panel/Panel';

const Wrapper = styled.div`
	height: auto;
	flex-direction: column;
	background-color: #F0F0F0;
	border-bottom: 1px solid;
    border-top: 1px solid;
    border-color: #E0E0E0;
`;

export default function CalendarScroller() {
	return (
		<Wrapper>
			<DayList />
			<Panel />
		</Wrapper>
	);
}