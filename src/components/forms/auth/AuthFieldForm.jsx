import PropTypes from 'prop-types';
import AuthFieldElement from './AuthFieldElement';
import {
	MdLock,
	MdOutlineMailOutline,
	MdPerson,
} from 'react-icons/md';

const AuthFieldForm = ({ login }) => {
	return (
		<>
			{!login && (
				<AuthFieldElement
					type='text'
					id='name'
					name='name'
					label='Name'
					icon={<MdPerson />}
				/>
			)}
			<AuthFieldElement
				type='email'
				id='email'
				name='email'
				label='Email'
				icon={<MdOutlineMailOutline />}
			/>
			<AuthFieldElement
				type='password'
				id='password'
				name='password'
				label='Password'
				icon={<MdLock />}
			/>
			{!login && (
				<AuthFieldElement
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

AuthFieldForm.propTypes = {
	login: PropTypes.bool,
};

export default AuthFieldForm;
