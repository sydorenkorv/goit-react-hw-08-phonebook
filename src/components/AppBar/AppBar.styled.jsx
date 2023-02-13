import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	min-height: 100vh;
	font-size: 40px;
	background-color: #f6f6f6;
`;
export const NavContainer = styled.div`
	border-bottom: var(--border);
	display: flex;
	justify-content: end;
	border-bottom: 1px solid #eeecec;
	padding: 0 30px;
`;

export const BodyContainer = styled.div`
	border-bottom: var(--border);
	display: flex;
	justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-size: 1.5rem;
	text-transform: uppercase;
	padding: 2rem 0;
	font-weight: bold;
	letter-spacing: 0.3rem;
	color: #0d0c1d;
	text-decoration: none;
	transition: color 0.3s linear;

	@media (max-width: 576px) {
		font-size: 1.5rem;
		text-align: center;
	}

	&:hover {
		color: var(--color-button);
	}
	&.active {
		color: var(--color-button);
	}
	@media (min-width: 768px) {
		margin-right: 30px;
	}
`;
