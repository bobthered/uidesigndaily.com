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
				DEFAULT: '0 22px 35px 0 rgba(5, 27, 105, .12)'
			},
			colors: {
				blue: {
					"50": "#F4F9FF",
					"100": "#EBF1FD",
					"200": "#95a6ce",
					"300": "#C8D1E5",
					"400": "#4969ad",
					"500": "#4968AD",
					DEFAULT: "#4968AD",
					"600": "#2e4476",
					"700": "#093f8c",
					"800": "#243456",
					"900": "#1E2C4B"
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
