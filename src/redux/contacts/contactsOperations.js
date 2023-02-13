import { toast } from 'react-toastify';
import { deleteContactsApi } from 'services/api-contact';
import { addContactApi } from 'services/api-contact';
import { fetchContactsApi } from 'services/api-contact';
import {
	addContactRequest,
	addContactSuccess,
	addContactError,
	deleteContactRequest,
	deleteContactSuccess,
	deleteContactError,
	fetchContactsRequest,
	fetchContactsSuccess,
	fetchContactsError,
} from './contactsActions';

const fetchContacts = () => async dispatch => {
	dispatch(fetchContactsRequest());

	try {
		const contacts = await fetchContactsApi();
		dispatch(fetchContactsSuccess(contacts));
	} catch (error) {
		dispatch(fetchContactsError(error.message));
	}
};

const addContact = contact => async dispatch => {
	dispatch(addContactRequest(contact));

	try {
		const contacts = await addContactApi(contact);
		dispatch(addContactSuccess(contacts));
	} catch (error) {
		dispatch(addContactError(error.message));
		toast(`Будь ласка авторизуйтесь`);
	}
};

const deleteContact = contactId => async dispatch => {
	dispatch(deleteContactRequest());

	try {
		await deleteContactsApi(contactId);
		dispatch(deleteContactSuccess(contactId));
	} catch (error) {
		dispatch(deleteContactError(error.message));
	}
};


const contactsOperations = {
	fetchContacts,
	addContact,
	deleteContact,
};
export default contactsOperations;
