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
				DEFAULT: '0 15px 25px -15px rgba(24,15,85,.27)'
			},
			colors: {
				gray: {
					50: '#F0F0F9',
					100: '#F1F0F9',
					300: '#C6C6DF',
					900: '#0D0C2F'
				},
				purple: {
					500: '#8600EF',
					DEFAULT: '#8600EF',
					600: '#7300CD',
				}
			},
			fontFamily: {
				sans: ['Mulish', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		}
	},

	plugins: []
};

module.exports = config;