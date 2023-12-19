import {
	getUserLogged,
	signin,
	signup,
} from '../service/authService';

export const handleSubmitRegister = (
	e,
	formData,
	navigate,
) => {
	e.preventDefault();
	signup(formData, navigate);
};

export const handleSubmitLogin = (
	e,
	formData,
	navigate,
	dispatch,
) => {
	e.preventDefault();
	signin(formData, navigate);
	getUserLogged(dispatch);
};
