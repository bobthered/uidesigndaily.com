// lib
const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')
const boxShadow = require('@bobthered/svelte-tailwindcss-ui/tailwind/themeExtensions/boxShadow')

const svelteTailwindCSSUIPath = require.resolve('@bobthered/svelte-tailwindcss-ui');
const purgePath = path.join(svelteTailwindCSSUIPath, '../', '../', '**', '*.{html,js,svelte,js}');

const makeShadow = (name, rgb) => {
	let obj = {};

	obj[name] = `0 40px 25px -20px rgba(${rgb}, .13)`;

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
			blue: {
				500: '#2E407E',
				DEFAULT: '#2E407E',
				600: '#243572',
			},
			gray: {
				50: '#EEEFF6',
			},
		},
		extend: {
			boxShadow: theme => boxShadow(theme, makeShadow),
			fontFamily: {
				sans: ['IBM Plex Sans', 'sans-serif'],
				serify: ['Merriweather', 'serif']
			}
		}
	},

	plugins: []
};

module.exports = config;