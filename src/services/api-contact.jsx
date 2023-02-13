import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsApi = async () => {
	const { data } = await axios.get(`/contacts`);
	return data;
};

export const addContactApi = async contact => {
	const { data } = await axios.post(`/contacts`, contact);
	return data;
};

export const deleteContactsApi = async contactId => {
	await axios.delete(`/contacts/${contactId}`);
};
