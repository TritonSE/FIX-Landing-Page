import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Static site generator requires inclusion of
  //   '/static' base URL, development site requires
  //   it to be absent
  preprocess: preprocess({
    replace: [[/@base/g, dev ? '' : '/static']]
  }),

  kit: {
    adapter: adapter(),
    paths: {
      base: '',
      relative: false
    }
  }
};

export default config;
