import styled from "styled-components";

export const Box = styled.div`
	padding: 2%;
	background: linear-gradient(to right, #34db6c, darkblue);
	// position: absolute;
	
	width: 100%;

	
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin-left:200px;
	
	
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	
	font-weight: bold;
`;