import styled from "styled-components";

export const SelectContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	border-radius: 25px;
	background: ${({ theme }) => theme.background2};
	color: ${({ theme }) => theme.background};
	font-size: 30px;
	> * {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		margin-top: 0 !important;
	}
`;

export const RadioCircle = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	display: grid;
	place-items: center;
	background: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.settsText};
	font-size: 16px;

	:hover {
		background: ${({ theme }) => theme.hoverBg2};
	}
`;
