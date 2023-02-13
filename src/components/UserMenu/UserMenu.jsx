import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { getUserName } from 'redux/auth/authSelectors';
import { Name } from './UserMenu.styled';
import { UserContainer, LogOut } from './UserMenu.styled';
import { TbLogout } from 'react-icons/tb';

export const UserMenu = () => {
	const dispatch = useDispatch();
	const name = useSelector(getUserName);

	return (
		<UserContainer>
			<Name>Welcome, {name}</Name>
			<LogOut type="button" onClick={() => dispatch(logOut())}>
				<TbLogout size="30" />
			</LogOut>
		</UserContainer>
	);
};

export default UserMenu;
