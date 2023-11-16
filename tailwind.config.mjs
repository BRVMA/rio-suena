const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                crema: '#efefef',
                verde: '#b0bcaf',
                celeste: '#b9dbe5',
                gris: '#808080',
                negro: '#1a1a1a',
            },
            fontFamily: {
                'sans': ['Manrope', ...defaultTheme.fontFamily.sans],
                'zighead': 'Zighead',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0%' },
                    '100%': { opacity: '100%' },
                }
            },
            animation: {
                'fade-in': 'fade-in 300ms ease',
            },
        },
	},
	plugins: [],
}
