import PropTypes from 'prop-types';
import {
	MdLock,
	MdOutlineMailOutline,
	MdPerson,
} from 'react-icons/md';
import AuthFieldFragment from './AuthFieldFragment';

const AuthFormField = ({ login }) => {
	return (
		<>
			{!login && (
				<AuthFieldFragment
					type='text'
					id='name'
					name='name'
					label='Name'
					icon={<MdPerson />}
				/>
			)}
			<AuthFieldFragment
				type='email'
				id='email'
				name='email'
				label='Email'
				icon={<MdOutlineMailOutline />}
			/>
			<AuthFieldFragment
				type='password'
				id='password'
				name='password'
				label='Password'
				icon={<MdLock />}
			/>
			{!login && (
				<AuthFieldFragment
					type='password'
					id='confirmPassword'
					name='confirmPassword'
					label='Confirm Password'
					icon={<MdLock />}
				/>
			)}
		</>
	);
};

AuthFormField.propTypes = {
	login: PropTypes.bool,
};

export default AuthFormField;
