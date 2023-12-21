/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				'primary-100': '#cdd5d8',
				'primary-200': '#9babb1',
				'primary-300': '#6a828b',
				'primary-400': '#385864',
				'primary-500': '#062e3d',
				'primary-600': '#052531',
				'primary-700': '#041c25',
				'primary-800': '#021218',
				'primary-900': '#01090c',
				'secondary-100': '#	e7feff',
				'secondary-200': '#cffdff',
				'secondary-300': '#b7fcff',
				'secondary-400': '#9ffbff',
				'secondary-500': '#87faff',
				'secondary-600': '#6cc8cc',
				'secondary-700': '#519699',
				'secondary-800': '#366466',
				'secondary-900': '#1b3233',
			},
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(circle,	rgb(5, 46, 61) 48%,	rgba(2, 16, 17, 1) 100%)',
			},
			linearGradientColors: {
				'gradient-text': [
					'#207fa8 0%',
					'#fdffb8 50%',
					'#3bd19f 100%',
				],
			},
			boxShadow: {
				wrapper:
					'0px 2px 10px 3px rgba(135, 250, 255, 1) inset',
				form: '-5px -5px 15px rgba(255, 255, 255, 0.1),	5px 5px 15px rgba(0, 0, 0, 0.35),	inset -5px -5px 15px rgba(255, 255, 255, 0.1), inset 5px 5px 15px rgba(0, 0, 0, 0.5)',
				elements:
					'-5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.35)',
				header:
					'0px 5px 5px -5px rgba(33, 128, 168, 0.749)',
				footer:
					'0px -5px 5px -5px rgba(32, 127, 168, 0.75)',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
