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
				DEFAULT: '0 50px 45px -15px rgba(18,21,52,.18)'
			},
			colors: {
				blue: {
					300: '#63658A',
					400: '#41436b',
					700: '#2F314F',
					800: '#292B48',
					900: '#242640'
				},
				purple: {
					500: '#717FFF',
					DEFAULT: '#717FFF',
					600: '#5162fb'
				}
			},
			fontFamily: {
				sans: ['Mulish', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;