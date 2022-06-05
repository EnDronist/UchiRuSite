import styled from 'styled-components';

const Wrapper = styled.div`
	height: 32px;
	margin-left: 48px;
	align-items: center;
	text-align: center;
	& > .month-name {
		justify-content: center;
		flex-grow: 5;
	}
	& > .button {
		justify-content: center;
		flex-grow: 1;
		font-family: Material Icons;
		font-size: 24px;
		line-height: 32px;
		color: red;
		user-select: none;
		cursor: pointer;
	}
`;

export default function Panel() {
	return (
		<Wrapper>
			<span className="button">chevron_left</span>
			<span className="month-name">March 2019</span>
			<span className="button">chevron_right</span>
		</Wrapper>
	);
}