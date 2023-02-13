import styled from 'styled-components';
import img from '../../images/book.jpg';

export const ContainerStyled = styled.div`
	width: 100%;
	background-image: url(${img});
	background-size: cover;
	@media (max-width: 1199px) {
		display: flex;
		flex-direction: column;
		padding: 50px 30px;
	}
	@media (min-width: 1200px) {
		height: 90vh;
		display: flex;
		justify-content: center;

		background-repeat: no-repeat;
		background-size: 100%;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 0;
	@media (min-width: 1200px) {
		width: 560px;
		&:not(:last-child) {
			margin-right: 20px;
		}
	}
`;

export const TitleMain = styled.h1`
	text-align: center;
	font-size: 72px;
`;

export const NoContact = styled.div`
	text-align: center;
	font-size: 28px;
`;
