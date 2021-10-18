// lib
const path = require('path');
const svelteTailwindCSSUIPath = require.resolve('@bobthered/svelte-tailwindcss-ui');
const purgePath = path.join(svelteTailwindCSSUIPath, '../', '../', '**', '*.{html,js,svelte,js}');

const config = {
	mode: 'jit',

	purge: {
		enabled: true,
		preserveHtmlElements: false,
		content: ["./src/**/*.{html,js,svelte,ts}", purgePath],
		options: {
			safelist: ['dark']
		}
	},

	theme: {
		extend: {
			boxShadow: {
				sm: '0 10px 20px -4px rgba(198,216,246,1)',
				DEFAULT: '0 34px 25px -20px rgba(149, 179, 232, .18)'
			},
			colors: {
				blue: {
					light: '#F0F4FB',
					DEFAULT: '#BCCEEA',
					dark: '#2C3E50',
				}
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				mulish: ['Mulish', 'sans-serif']
			}
		}
	},

	plugins: [
		require('@tailwindcss/aspect-ratio')
	]
};

module.exports = config;
