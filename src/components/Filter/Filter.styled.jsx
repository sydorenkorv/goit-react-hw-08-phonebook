import styled from 'styled-components';

export const InputFilter = styled.input`
	width: 100%;
	background-color: var(--color-input);
	height: 40px;
	margin: 0;
	padding: 0 15px 0 15px;
	border-radius: 5px;

	&:not(:last-child) {
		margin-right: 10px;
	}
`;

export const LabelFilter = styled.label`
	@media (max-width: 1199px) {
		margin: 25px 0;
	}
	@media (min-width: 1200px) {
		margin-bottom: 15px;
	}

	width: 100%;
	display: flex;
	flex-direction: column;
	font-size: 22px;
	color: var(--color-label);
`;
