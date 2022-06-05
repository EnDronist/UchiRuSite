import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DayOfWeek = styled.span`
    height: 20px;
    font-size: 8px;
    line-height: 24px;
    font-weight: bold;
`;

const DayNumber = styled.span`
    width: 20px;
    height: 20px;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    padding: 4px 4px 4px 4px;
    ${props => props.isCurrentDay && css`
        color: white;
        background: red;
        border-radius: 50%;
    `}
`;

export default function Day(props) {
    return (
        <Wrapper>
            <DayOfWeek>{props.dayOfWeek}</DayOfWeek>
            <DayNumber isCurrentDay={props.isCurrentDay}>{props.dayNumber}</DayNumber>
        </Wrapper>
    );
}