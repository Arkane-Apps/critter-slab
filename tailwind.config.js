/** @type {import('tailwindcss').Config} */
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',
    contentPath(import.meta.url, 'svelte')
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['Minecraft']
      }
    },
  },
  plugins: [
    skeleton({
      // NOTE: each theme included will increase the size of your CSS bundle
      themes: [themes.cerberus, themes.rocket]
    })
  ],
}

