import { Container, ContainerStyled } from './Contacts.styled';
import { InfinitySpin } from 'react-loader-spinner';
import ContactForm from 'components/ContactForm';
import { useEffect } from 'react';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const Contacts = () => {
	const dispatch = useDispatch();
	const isLogIn = useSelector(getIsLoggedIn);
	const isLoadingContacts = useSelector(contactsSelectors.getLoading);

	useEffect(() => {
		if (isLogIn) dispatch(contactsOperations.fetchContacts());
	}, [dispatch, isLogIn]);

	return (
		<ContainerStyled>
			<Container>
				<ContactForm />
			</Container>
			<Container>
				{isLoadingContacts && (
					<InfinitySpin width="100" color="#132b13" />
				)}
				<Filter />
				<ContactList />
			</Container>
		</ContainerStyled>
	);
};
export default Contacts;
