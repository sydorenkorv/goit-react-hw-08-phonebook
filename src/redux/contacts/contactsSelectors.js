import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;
const getfilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getTotalContactCount = state => {
	const contacts = getAllContacts(state);
	return contacts.length;
};

const getVisibleContacts = createSelector(
	[getAllContacts, getfilter],
	(contacts, filter) => {
		if (contacts.length !== 0 && filter) {
			const normalizedFilter = filter.toLowerCase();
			return contacts.filter(({ name }) =>
				name.toLowerCase().includes(normalizedFilter)
			);
		}
		return contacts;
	}
);

const contactsSelectors = {
	getAllContacts,
	getLoading,
	getfilter,
	getVisibleContacts,
	getTotalContactCount,
};
export default contactsSelectors;
