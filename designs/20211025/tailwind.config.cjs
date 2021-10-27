// lib
const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')
const boxShadow = require('@bobthered/svelte-tailwindcss-ui/tailwind/themeExtensions/boxShadow')

const svelteTailwindCSSUIPath = require.resolve('@bobthered/svelte-tailwindcss-ui');
const purgePath = path.join(svelteTailwindCSSUIPath, '../', '../', '**', '*.{html,js,svelte,js}');

const makeShadow = (name, rgb) => {
	let obj = {};

	// obj[name] = `0 17px 17px -10px rgba(${rgb}, .4)`;

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
				100: '#E8E8F6',
				900: '#121F38'
			},
			blue: {
				100: '#EDF4FF',
				200: '#DBE9FF',
				500: '#68A4FF',
				DEFAULT: '#68A4FF',
				700: '#1B65D6',
			},
			pink: {
				100: '#FFE8F1',
				200: '#FFD7E8',
				500: '#FF68A7',
				DEFAULT: '#FF68A7',
				700: '#E02E79',
			}
		},
		extend: {
			boxShadow: theme => boxShadow(theme, makeShadow),
			fontFamily: {
				sans: ['Mulish', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			}
		}
	},

	plugins: []
};

module.exports = config;