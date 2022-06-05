import { useState } from 'react';
import styled from 'styled-components';
import Day from './Day';

const Wrapper = styled.div`
	margin-left: 48px;
`;

function dayToWeek(dayOfWeek) {
	const week = ["M", "T", "W", "T", "F", "S", "S"];
	if (dayOfWeek < 1 || dayOfWeek > 7) return "";
	return week[dayOfWeek - 1];
}

export default function DayList() {
    const [currentWeek, ] = useState([25, 26, 27, 28, 29, 30, 31]);
    const [currentDay, ] = useState(5);
	return (
		<Wrapper>
			{currentWeek.map((element, i) =>
                <Day key={i}
                    dayOfWeek={dayToWeek(i + 1)}
                    dayNumber={element}
                    isCurrentDay={currentDay === i + 1}/>)}
		</Wrapper>
	);
}