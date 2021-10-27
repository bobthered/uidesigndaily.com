// lib
const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')
const boxShadow = require('@bobthered/svelte-tailwindcss-ui/tailwind/themeExtensions/boxShadow')

const svelteTailwindCSSUIPath = require.resolve('@bobthered/svelte-tailwindcss-ui');
const purgePath = path.join(svelteTailwindCSSUIPath, '../', '../', '**', '*.{html,js,svelte,js}');

const makeShadow = (name, rgb) => {
	let obj = {};

	obj[name] = `0 13px 25px 0px rgba(${rgb}, .15)`;

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
				50: '#ECEFF8',
				800: '#2C3E50',
				900: '#1B2442',
			},
			green: {
				50: '#EEF8EC',
			},
			red: {
				50: '#F8ECEC',
			},
			pink: {
				50: '#F8ECF8'
			}
		},
		extend: {
			boxShadow: theme => boxShadow(theme, makeShadow),
			fontFamily: {
				sans: ['IBM Plex Sans', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
				mulish: ['Mulish'],
			}
		}
	},

	plugins: []
};

module.exports = config;