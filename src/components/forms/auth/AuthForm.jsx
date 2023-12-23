import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import AuthFormButton from './AuthFormButton';
import AuthFormHeader from './AuthFormHeader';
import AuthFormField from './AuthFormField';
import AuthFormSwitch from './AuthFormSwitch';
import {
	getInitialValues,
	getValidationSchema,
} from '../../../validations/authFormValidation';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useContext';
import { handleSubmit } from '../../../utils/service/authService';
import AuthErrorMessage from './AuthErrorMessage';

const AuthForm = ({ login }) => {
	const navigate = useNavigate();
	const { dispatch } = useAuthContext();

	return (
		<Formik
			initialValues={getInitialValues(login)}
			validationSchema={getValidationSchema(login)}
			onSubmit={(values, { setSubmitting }) =>
				handleSubmit({
					values,
					setSubmitting,
					login,
					dispatch,
					navigate,
				})
			}>
			{({ isSubmitting }) => (
				<Form className='md:w-80 flex flex-col border-8 dark:border-bkg-2 shadow-form p-5 rounded-[20px]'>
					<AuthErrorMessage />
					<AuthFormHeader login={login} />
					<AuthFormField login={login} />
					<AuthFormButton
						login={login}
						isSubmitting={isSubmitting}
					/>
					<AuthFormSwitch login={login} />
				</Form>
			)}
		</Formik>
	);
};

AuthForm.propTypes = {
	login: PropTypes.bool,
};

export default AuthForm;
