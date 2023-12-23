import { useAuthContext } from '../../../hooks/useContext';

const AuthErrorMessage = () => {
	const { error } = useAuthContext();
	if (error)
		return (
			<small className='text-red-600 text-center'>{`***${error}***`}</small>
		);
};

export default AuthErrorMessage;
