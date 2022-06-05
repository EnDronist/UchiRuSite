import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
	height: 48px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #F0F0F0;
    font-size: 16px;
    color: red;
    line-height: 48px;
    text-align: center;
    & > .button {
        padding: 0px 32px 0px 32px;
        user-select: none;
        cursor: pointer;
    }
`;

export default function BottomPanel({ references }) {
    const [isCurrentEntryFilled, setIsCurrentEntryFilled] = useState();
    const handleClick = event => {
        const selectedEntry = references.calendarField.weekField.getSelectedEntry();
        if (!selectedEntry) return;
        selectedEntry.setFilled(false);
        setIsCurrentEntryFilled(false);
    };
    references.bottomPanel = {};
    references.bottomPanel.setIsCurrentEntryFilled = setIsCurrentEntryFilled;
    return (
        <Wrapper>
            <span className="button">Today</span>
            {isCurrentEntryFilled &&
                <span className="button" onClick={handleClick}>Delete</span>
            }
        </Wrapper>
    );
}