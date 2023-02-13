import { Formik } from 'formik';
import { toast } from 'react-toastify';
import {
	Input,
	InputContainer,
	ButtonSubmit,
	FormStyled,
	Error,
} from './ContactForm.styled';
import { schema } from 'helpers/validation-yup';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';

const initialValues = {
	name: '',
	number: '',
};

const ContactForm = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsSelectors.getAllContacts);

	const handleSubmit = (values, { resetForm }) => {
		const findContact = contacts.find(contact =>
			contact.name.toLowerCase().includes(values.name.toLowerCase())
		);
		findContact
			? toast.info(`${values.name} is already in contact`)
			: dispatch(contactsOperations.addContact(values));
		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={schema}
		>
			{({ errors, touched, isValidating }) => (
				<FormStyled>
					<InputContainer>
						<label>
							<Input type="text" name="name" />
							Name
							<Error component="div" name="name" />
						</label>

						<label>
							<Input type="tel" name="number" />
							Number phone
							<Error component="div" name="number" />
						</label>
					</InputContainer>

					<ButtonSubmit type="submit">ADD CONTACT</ButtonSubmit>
				</FormStyled>
			)}
		</Formik>
	);
};

export default ContactForm;
