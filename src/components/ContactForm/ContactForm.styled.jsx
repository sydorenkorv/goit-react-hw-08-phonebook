import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const InputContainer = styled.div`
	width: 100%;
	display: flex;
	@media (max-width: 1199px) {
		flex-direction: column;
	}
	@media (min-width: 1200px) {
		padding: 0;
		justify-content: center;
	}

	& label {
		display: flex;
		flex-direction: column;
		font-size: 22px;
		color: var(--color-label);
		margin-bottom: 15px;

		@media (min-width: 1200px) {
			&:not(:last-child) {
				margin-right: 10px;
			}
		}
	}
`;

export const Error = styled(ErrorMessage)`
	font-size: 14px;
	color: var(--color-warning);
`;

export const Input = styled(Field)`
	@media (max-width: 1199px) {
		width: 100%;
	}
	@media (min-width: 1200px) {
		width: 275px;
	}

	background-color: var(--color-input);
	height: 40px;
	margin: 0;
	padding: 0 15px 0 15px;
	border-radius: 5px;
`;

export const ButtonSubmit = styled.button`
	@media (max-width: 1199px) {
		width: 100%;
	}
	width: 200px;
	height: 40px;
	border-radius: 5px;
	color: var(--color-button);
	background-color: inherit;
	border: 1px solid var(--color-button);
`;
