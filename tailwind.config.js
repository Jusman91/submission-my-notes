/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				primary: {
					1: 'hsl(var(--color-primary1) / <alpha-value>)',
					2: 'hsl(var(--color-primary2) / <alpha-value>)',
				},
				secondary: {
					1: 'hsl(var(--color-secondary1) / <alpha-value>)',
					2: 'hsl(var(--color-secondary2) / <alpha-value>)',
				},
				bkg: {
					1: 'hsl(var(--color-bkg1) / <alpha-value>)',
					2: '#021218',
				},
				content:
					'hsl(var(--color-content) / <alpha-value>)',
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
				wrapper: '0px 2px 10px 3px hsl(183,100%,76%) inset',
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
	darkMode: ['class', '[data-theme="dark"]'],
};
