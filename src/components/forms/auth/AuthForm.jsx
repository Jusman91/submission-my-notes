import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import AuthHeaderForm from './AuthHeaderForm';
import AuthFieldForm from './AuthFieldForm';
import AuthButtonForm from './AuthButtonForm';
import AuthSwitchForm from './AuthSwitchForm';
import {
	getInitialValues,
	getValidationSchema,
} from './authValidationForm';
import { useNavigate } from 'react-router-dom';
import { handleSubmit } from './authHandleSubmitForm';
import { useAuthContext } from '../../../hooks/useAuthContext';

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
				<Form className='md:w-80 flex flex-col border-8 border-primary-800 shadow-form p-5 rounded-[20px]'>
					<AuthHeaderForm login={login} />
					<AuthFieldForm login={login} />
					<AuthButtonForm
						login={login}
						isSubmitting={isSubmitting}
					/>
					<AuthSwitchForm login={login} />
				</Form>
			)}
		</Formik>
	);
};

AuthForm.propTypes = {
	login: PropTypes.bool,
};

export default AuthForm;
