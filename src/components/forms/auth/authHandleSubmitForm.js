import {
	getLoggedUser,
	register,
} from '../../../utils/service/authService';

export const handleSubmit = ({
	values,
	setSubmitting,
	login,
	dispatch,
	navigate,
}) => {
	if (login) {
		getLoggedUser({
			credentials: values,
			dispatch,
			navigate,
		});
	} else {
		register(
			{
				name: values.name,
				email: values.email,
				password: values.password,
			},
			navigate,
		);
	}
	setSubmitting(false);
};
