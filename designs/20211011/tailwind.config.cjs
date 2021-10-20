// lib
const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')
const boxShadow = require('@bobthered/svelte-tailwindcss-ui/tailwind/themeExtensions/boxShadow')

const svelteTailwindCSSUIPath = require.resolve('@bobthered/svelte-tailwindcss-ui');
const purgePath = path.join(svelteTailwindCSSUIPath, '../', '../', '**', '*.{html,js,svelte,js}');

const makeShadow = (name, rgb) => {
	let obj = {};

	obj[name] = `0 17px 17px -10px rgba(${rgb}, .4)`;
	obj[name + '-hard'] = `inset 0 -4px 0 0 rgba(${rgb}, 1)`;
	obj[name + '-hard-lg'] = `inset 0 -12px 1px -5px rgba(${rgb}, 1)`;

	return obj;
}

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
		colors: {
			...defaultTheme.colors,
			gray: {
				50: '#F4F7F5',
				300: '#CDDAF3',
				500: '#464A67',
				900: '#191E45',
			},
			green: {
				500: '#639B1B',
				DEFAULT: '#639B1B',
				600: '#4C8406',
			},
			purple: {
				100: '#E9E9FF',
				200: '#D7D6FE',
				500: '#6E6BFF',
				DEFAULT: '#6E6BFF',
				600: '#3D3AE3',
				700: '#2926C5',
			}
		},
		extend: {
			boxShadow: theme => boxShadow(theme, makeShadow),
			fontFamily: {
				sans: ['Mulish', 'sans-serif']
			}
		},

	},

	plugins: []
}

module.exports = config;