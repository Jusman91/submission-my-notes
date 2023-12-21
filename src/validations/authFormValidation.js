import * as Yup from 'yup';

export const initialRegisterValue = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

export const initialLoginValue = {
	email: '',
	password: '',
};

export const registerSchema = Yup.object().shape({
	name: Yup.string()
		.required('This field is required')
		.min(3, 'Your name must be at least 3 characters long')
		.max(10, 'Your name up to 10 characters long'),
	email: Yup.string()
		.required('This field is required')
		.email('Invalid email'),
	password: Yup.string()
		.required('This field is required')
		.min(6, 'Must be at least 6 characters long'),
	confirmPassword: Yup.string()
		.required('This field is required')
		.oneOf([Yup.ref('password')], 'Password do not match'),
});

export const loginSchema = Yup.object().shape({
	email: Yup.string()
		.required('This field is required')
		.email('Invalid email'),
	password: Yup.string().required('This field is required'),
});

export const getValidationStyle = ({
	touched,
	errors,
	name,
}) => {
	if (touched[name] && errors[name]) {
		return 'error';
	} else if (touched[name] && !errors[name]) {
		return 'success';
	} else {
		return 'default';
	}
};

export const getInitialValues = (login) => {
	return login ? initialLoginValue : initialRegisterValue;
};

export const getValidationSchema = (login) => {
	return login ? loginSchema : registerSchema;
};
