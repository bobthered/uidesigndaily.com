// imports
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development'

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/uidesigndaily.com/designs/20211014/build'
		},
		target: '#svelte'
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
