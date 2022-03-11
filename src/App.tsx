import { FC, useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Index } from './components/index';

export const App: FC = () => {
	const location = useLocation();

	useLayoutEffect(() => {
		document.scrollingElement?.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<Routes>
			<Route index element={<Index />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};
