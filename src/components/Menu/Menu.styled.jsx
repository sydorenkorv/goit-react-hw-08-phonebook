import styled from 'styled-components';

export const StyledMenu = styled.nav`
	@media (max-width: 576px) {
		width: 100%;
	}

	@media (max-width: 1199px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: #effffacf;
		transform: ${({ open }) =>
			open ? 'translateX(0)' : 'translateX(-100%)'};
		height: 100vh;
		text-align: left;
		padding: 2rem;
		position: absolute;
		top: 0;
		left: 0;
		transition: transform 0.3s ease-in-out;
		z-index: 9;
	}

	@media (min-width: 1200px) {
		border-bottom: var(--border);
		display: flex;
		justify-content: end;
		border-bottom: 1px solid #eeecec;
	}
`;

export const StyledBurger = styled.button`
	@media (max-width: 1199px) {
		position: absolute;
		top: 5%;
		left: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 2rem;
		height: 2rem;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 10;

		&:focus {
			outline: none;
		}

		div {
			width: 2rem;
			height: 0.25rem;
			background: ${({ open }) => (open ? '#0D0C1D' : '#0D0C1D')};
			border-radius: 10px;
			transition: all 0.3s linear;
			position: relative;
			transform-origin: 1px;

			:first-child {
				transform: ${({ open }) =>
					open ? 'rotate(45deg)' : 'rotate(0)'};
			}

			:nth-child(2) {
				opacity: ${({ open }) => (open ? '0' : '1')};
				transform: ${({ open }) =>
					open ? 'translateX(20px)' : 'translateX(0)'};
			}

			:nth-child(3) {
				transform: ${({ open }) =>
					open ? 'rotate(-45deg)' : 'rotate(0)'};
			}
		}
	}
	@media (min-width: 1200px) {
		display: none;
	}
`;
