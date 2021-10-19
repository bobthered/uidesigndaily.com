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
				DEFAULT: '0 10px 25px -15px #111628'
			},
			colors: {
				blue: {
					200: '#B1B9D8',
					400: '#7F88A9',
					500: '#8795C5',
					700: '#2E3650',
					800: '#252B42',
					900: '#1A2036',
				},
				purple: {
					500: '#8E66FF',
					DEFAULT: '#8E66FF',
				}
			},
			fontFamily: {
				sans: ['IBM Plex Sans', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		}
	},

	plugins: []
};

module.exports = config;