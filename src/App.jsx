import styled from 'styled-components';
import AppHeader from './AppHeader/AppHeader';
import CalendarScroller from './CalendarScroller/CalendarScroller';
import CalendarField from './CalendarField/CalendarField';
import BottomPanel from './BottomPanel/BottomPanel';

const Wrapper = styled.div`
	justify-content: center;
	& > .app-area {
		max-width: 740px;
		flex-direction: column;
		flex-grow: 1;
	}
`;

export default function App() {
	// Ok, redux state tree without redux
	const references = {};
	return (
		<Wrapper>
			<div className={"app-area"}>
				<AppHeader references={references}/>
				<CalendarScroller />
				<CalendarField references={references}/>
				<BottomPanel references={references}/>
			</div>
		</Wrapper>
	);
}