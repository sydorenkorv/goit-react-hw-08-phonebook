import { NavLinkStyled } from 'components/AppBar/AppBar.styled';

const AuthNav = () => {
	return (
		<>
			<NavLinkStyled to="/register">Sign Up</NavLinkStyled>
			<NavLinkStyled to="/login">Sign In</NavLinkStyled>
		</>
	);
};

export default AuthNav;
