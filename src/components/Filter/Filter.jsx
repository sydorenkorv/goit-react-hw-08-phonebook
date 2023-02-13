import { InputFilter, LabelFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, contactsSelectors } from 'redux/contacts';

const Filter = () => {
	const dispatch = useDispatch();
	const value = useSelector(contactsSelectors.getfilter);

	const handleChangeFilter = e => {
		dispatch(changeFilter(e.target.value));
	};
	return (
		<LabelFilter>
			<InputFilter
				type="text"
				value={value}
				onChange={handleChangeFilter}
			/>
			Find contact by name
		</LabelFilter>
	);
};


export default Filter;
