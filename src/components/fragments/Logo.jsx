import { Link } from 'react-router-dom';
import LogoImg from '../elements/LogoImg';
import Typography from '../elements/Typography';
const Logo = () => {
	return (
		<Link to={'/'} className='flex justify-center logo'>
			<LogoImg />
			<Typography className='h1 mobile text-gradient'>
				My Notes
			</Typography>
		</Link>
	);
};

export default Logo;
