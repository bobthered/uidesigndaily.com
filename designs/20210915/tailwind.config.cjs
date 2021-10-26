// lib
const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')
const { boxShadow, stroke } = require('@bobthered/svelte-tailwindcss-ui/tailwind/themeExtensions')

const svelteTailwindCSSUIPath = require.resolve('@bobthered/svelte-tailwindcss-ui');
const purgePath = path.join(svelteTailwindCSSUIPath, '../', '../', '**', '*.{html,js,svelte,js}');

const makeShadow = (name, rgb) => {
	let obj = {};

	obj[name] = `0 34px 48px -12px rgba(${rgb}, .12)`;

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
				50: '#F7F8FB',
				300: '#CFD4E2',
				500: '#555B6D',
				900: '#0F1730'
			},
			pink: '#E92E66',
			orange: '#FD8541',
			yellow: '#FDC841',
			teal: '#3FBEDA',
			blue: '#4249ED',
			purple: '#8234E4'
		},
		extend: {
			boxShadow: theme => boxShadow(theme, makeShadow),
			fontFamily: {
				sans: [ 'IBM Plex Sans', 'sans-serif']
			},
			stroke: theme => stroke(theme)
		}
	},

	plugins: []
};

module.exports = config;