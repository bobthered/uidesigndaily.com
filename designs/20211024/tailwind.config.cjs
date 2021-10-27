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
			pink: {
				500: '#FF529B',
				DEFAULT: '#FF529B',
				600: '#FF2983',
			},
			yellow: {
				500: '#ECC86B',
				DEFAULT: '#ECC86B',
			},
			gray: {
				300: '#B6BEF2',
				800: '#202544',
				900: '#171B34',
			}
		},
		extend: {
			boxShadow: theme => boxShadow(theme, makeShadow),
			fontFamily: {
				sans: ['IBM Plex Sans', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		}
	},

	plugins: []
};

module.exports = config;