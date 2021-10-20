// imports
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development'

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/uidesigndaily.com/designs/20211018/build'
		},
		target: '#svelte',
		vite: {
			optimzeDeps: {
				include: ['svelte-hero-icons', 'lodash-es', '@bobthered/svelte-tailwindcss-ui']
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;