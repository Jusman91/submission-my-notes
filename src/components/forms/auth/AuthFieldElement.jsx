import PropTypes from 'prop-types';
import { Icon, Input, Label } from '../../elements';
import { useFormikContext } from 'formik';
import { getValidationStyle } from './authValidationForm';

const AuthFieldElement = ({
	type,
	id,
	name,
	label,
	icon,
}) => {
	const {
		handleChange,
		handleBlur,
		values,
		errors,
		touched,
	} = useFormikContext();
	return (
		<div className=''>
			<div className='relative z-0 w-full mb-5 group'>
				<Input
					className={`peer shadow-elements py-3 pr-3 pl-12 rounded-3xl placeholder-transparent focus:outline-none focus:ring-0`}
					validation={getValidationStyle({
						touched,
						errors,
						name,
					})}
					type={type}
					id={id}
					name={name}
					placeholder=' '
					value={values[name]}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<Label
					htmlFor={id}
					validation={getValidationStyle({
						touched,
						errors,
						name,
					})}
					className='absolute left-10 -top-3 px-2 pointer-events-none font-light tracking-tighter peer-placeholder-shown:top-3 transition-[top,transform] duration-300 peer-focus:-top-3 peer-focus:border peer-focus:bg-primary-900 peer-focus:rounded-[10px] peer-focus:tracking-widest peer-focus:scale-75 peer-valid:-top-3 peer-valid:border peer-valid:bg-primary-900 peer-valid:rounded-[10px] peer-valid:tracking-widest peer-valid:scale-75'>
					{label}
				</Label>
				<Icon
					validation={getValidationStyle({
						touched,
						errors,
						name,
					})}
					className='absolute left-3 top-[10px] py-[2px] pr-2 pl-0 text-xl border-r border-r-secondary-700'>
					{icon}
				</Icon>
				{touched[name] && errors[name] ? (
					<small className='text-red-600'>
						{errors[name]}
					</small>
				) : null}
			</div>
		</div>
	);
};

AuthFieldElement.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	icon: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
	]),
};

export default AuthFieldElement;
