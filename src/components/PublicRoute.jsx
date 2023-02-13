import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export default function PublicRoute({
	restricted,
	redirectPath = '/',
	children,
}) {
	const isLoggedIn = useSelector(getIsLoggedIn);
	if (isLoggedIn && restricted) {
		return <Navigate to={redirectPath} replace />;
	}
	return children ? children : <Outlet />;
}
