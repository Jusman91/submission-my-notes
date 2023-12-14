import { useRoutes } from 'react-router-dom';
import { LayoutNotes, LayoutRoot } from '../layouts';
import {
	ArchivedNotes,
	DetailsNote,
	Home,
	NotFound404,
	Note,
	Notes,
} from '../pages';
import { NoContent } from '../components/fragments';

const Routes = () => {
	const element = useRoutes([
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
							path: '',
							element: <Notes />,
						},
						{
							path: 'new',
							element: <Note />,
						},
						{
							path: ':id/edit',
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
						{
							path: 'no-content',
							element: (
								<NoContent text='Catatan tidak ditemukan' />
							),
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
