import { Outlet } from 'react-router';
import { Suspense, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { NavContainer, AppContainer, BodyContainer } from './AppBar.styled';
import { Burger, Menu } from 'components/Menu/Menu';

export const AppBar = () => {
	const [open, setOpen] = useState(false);

	return (
		<AppContainer>
			<NavContainer>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</NavContainer>
			<BodyContainer>
				<Suspense
					fallback={<InfinitySpin width="100" color="#132b13" />}
				>
					<Outlet />
				</Suspense>
			</BodyContainer>
		</AppContainer>
	);
};

export default AppBar;
