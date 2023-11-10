import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					},
					{
						name: 'wintry',
						enhancements: true
					},
					{
						name: 'modern',
						enhancements: true
					},
					{
						name: 'hamlindigo',
						enhancements: true
					},
					{
						name: 'rocket',
						enhancements: true
					},
					{
						name: 'sahara',
						enhancements: true
					},
					{
						name: 'gold-nouveau',
						enhancements: true
					},
					{
						name: 'vintage',
						enhancements: true
					},
					{
						name: 'seafoam',
						enhancements: true
					},
					{
						name: 'crimson',
						enhancements: true
					}
				]
			}
		}),

		plugin(function ({ addUtilities }) {
			const pwaUtilities = {
				'.safe-top': {
					paddingTop: 'constant(safe-area-inset-top)',
					paddingTop: 'env(safe-area-inset-top)'
				},
				'.safe-left': {
					paddingLeft: 'constant(safe-area-inset-left)',
					paddingLeft: 'env(safe-area-inset-left)'
				},
				'.safe-right': {
					paddingRight: 'constant(safe-area-inset-right)',
					paddingRight: 'env(safe-area-inset-right)'
				},
				'.safe-bottom': {
					paddingBottom: 'constant(safe-area-inset-bottom)',
					paddingBottom: 'env(safe-area-inset-bottom)'
				},
				'.disable-scrollbars': {
					scrollbarWidth: 'none',
					'-ms-overflow-style': 'none',
					'&::-webkit-scrollbar': {
						width: '0px',
						background: 'transparent',
						display: 'none'
					},
					'& *::-webkit-scrollbar': {
						width: '0px',
						background: 'transparent',
						display: 'none'
					},
					'& *': {
						scrollbarWidth: 'none',
						'-ms-overflow-style': 'none'
					}
				},
				'.no-tap-highlighting': {
					'webkit-tap-highlight-color': 'rgba(0,0,0,0)'
				}
			};

			addUtilities(pwaUtilities);
		})
	]
} satisfies Config;
