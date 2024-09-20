import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			light: '#f6f6f6',
			primary: '#13151a',
			secondary: '#ff9100',
		},
		extend: {},
	},
	plugins: [animations],
}
