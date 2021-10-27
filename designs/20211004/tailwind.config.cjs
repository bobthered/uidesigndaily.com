// lib
const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')
const boxShadow = require('@bobthered/svelte-tailwindcss-ui/tailwind/themeExtensions/boxShadow')

const svelteTailwindCSSUIPath = require.resolve('@bobthered/svelte-tailwindcss-ui');
const purgePath = path.join(svelteTailwindCSSUIPath, '../', '../', '**', '*.{html,js,svelte,js}');

const makeShadow = (name, rgb) => {
	let obj = {};

	obj[name] = `0 14px 21px -5px rgba(${rgb}, .25)`;

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
				600: '#353854',
				700: '#2A2C43',
				900: '#070A2C',
			},
			blue: {
				500: '#4378FF',
				DEFAULT: '#4378FF',
			},
			yellow: {
				500: '#F8BD66',
				DEFAULT: '#F8BD66',
				600: '#E8A849',
			}
		},
		extend: {
			boxShadow: theme => boxShadow(theme, makeShadow),
			fontFamily: {
				sans: ['IBM Plex Sans', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;