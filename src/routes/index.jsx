import { useRoutes } from 'react-router-dom';
import {
	LayoutAuth,
	LayoutNotes,
	LayoutRoot,
} from '../layouts';
import {
	ArchivedNotes,
	DetailsNote,
	Home,
	Login,
	NotFound404,
	Note,
	Register,
} from '../pages';

const Routes = () => {
	const element = useRoutes([
		{
			path: 'auth',
			element: <LayoutAuth />,
			children: [
				{
					path: 'register',
					element: <Register />,
				},
				{
					path: 'login',
					element: <Login />,
				},
			],
		},
		{
			path: '',
			element: <LayoutRoot />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: 'notes',
					element: <LayoutNotes />,
					children: [
						{
							path: 'new',
							element: <Note />,
						},
						{
							path: ':id',
							element: <DetailsNote />,
						},
						{
							path: 'archives',
							element: <ArchivedNotes />,
						},
					],
				},
			],
		},
		{
			path: '*',
			element: <NotFound404 />,
		},
	]);
	return element;
};

export default Routes;
