import styled from 'styled-components';

export const UserContainer = styled.div`
	@media (max-width: 1199px) {
		padding: 2rem 0;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 1200px) {
		flex-direction: row;
		align-items: center;
	}

	width: 100%;
	display: flex;
`;

export const Name = styled.span`
	margin-right: 10px;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
	line-height: 1.334;
	letter-spacing: 0em;
`;

export const LogOut = styled.button`
	background-color: inherit;
`;
