import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const fetchSignUp = async userData => {
	const data = axios.post('/users/signup', userData);
	return data;
};

export const fetchLogIn = async credentials => {
	const { data } = await axios.post('/users/login', credentials);
	return data;
};

export const fetchLogOut = async contactId => {
	const { data } = await axios.post('/users/logout');
	return data;
};
