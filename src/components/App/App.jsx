import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { useDispatch
} from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperation';
import { Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { lazy } from 'react';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const AppBar = lazy(() => import('components/AppBar'));
const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch]);

	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				theme="dark"
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Suspense fallback={<InfinitySpin width="100" color="#132b13" />}>
				<Routes>
					<Route path="/" element={<AppBar />}>
						<Route index element={<Home />} />
						<Route
							element={
								<PublicRoute
									redirectPath="/contacts"
									restricted
								/>
							}
						>
							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login />} />
						</Route>
						<Route element={<PrivateRoute redirectPath="/" />}>
							<Route path="/contacts" element={<Contacts />} />
						</Route>
					</Route>
				</Routes>
			</Suspense>
		</>
	);
};
