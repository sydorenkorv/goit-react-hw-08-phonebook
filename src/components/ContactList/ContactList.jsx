import { Item, ButtonClose, Contact } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsSelectors.getVisibleContacts);

	const onDeleteContact = id =>
		dispatch(contactsOperations.deleteContact(id));

	return (
		<ul>
			<TransitionGroup className="todo-list">
				{contacts &&
					contacts.map(({ id, name, number }) => {
						return (
							<CSSTransition
								key={id}
								timeout={500}
								classNames="item"
							>
								<Item key={id}>
									<Contact>
										{name}: {number}
									</Contact>
									<ButtonClose
										type="button"
										onClick={() => onDeleteContact(id)}
									>
										x
									</ButtonClose>
								</Item>
							</CSSTransition>
						);
					})}
			</TransitionGroup>
		</ul>
	);
};

export default ContactList;
