/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans'],
				mono: ['IBM Plex Mono'],
				serif: ['IBM Plex Serif'],
			},
			animation: {
				fadeInOut: 'fadeInOut 2s ease-in-out',
			},
			keyframes: {
				fadeInOut: {
					'0%': { opacity: '0%' },
					'25%': { opacity: '100%' },
					'75%': { opacity: '100%' },
					'100%': { opacity: '0%' },
				},
			},
		},
	},
	plugins: [],
};
