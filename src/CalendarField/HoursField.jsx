import styled from 'styled-components';

const Wrapper = styled.div`
	display: block;
	width: 48px;
	font-size: 12px;
	text-align: right;
	color: lightgray;
	padding-right: 4px;
	& p {
		height: 12px;
		line-height: 12px;
		text-align: right;
		margin: 0px;
	}
	& p + p {
		margin-top: 24px;
	}
`;

export default function HoursField() {
	return (
		<Wrapper>
			{[...Array(24).keys(), 0].map((elem, i) =>
				<p key={i}>{`${elem}`.padStart(2, "0") + ":00"}</p>)}
		</Wrapper>
	);
}