/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
	darkMode: 'class',
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
			  "2xl": "1400px",
			},
		  },
		extend: {
			colors: {
				'lime': '#8fff16',
				'deep': '#060606',
				'midnight': '#022f35',
				'frost': '#ecfcfd',
				'space': '#1A1C3C',
				'violeta': '#180E2A',
				'white': '#FFFFFF',
				'fuxia': '#f92bd1',
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				  },
				  secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				  },
				  destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				  },
				  muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				  },
				  accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				  },
				  popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				  },
				  card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				  },
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: "calc(var(--radius) - 4px)",
			},
			// fontFamily: {
			// 	sans: ["var(--font-sans)", ...fontFamily.sans],
			// },
			keyframes: {
				"accordion-down": {
				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			typography: () => ({
				DEFAULT: {
				  css: {
					'div[data-node-type="callout"]': {
					  display: 'flex',
					  'justify-content': 'flex-start',
					  'align-items': 'flex-start',
					  'background-color': '#F8FAFC',
					  border: '1px solid #E2E8F0',
					  padding: ' 1rem 1.5rem',
					  gap: '0.5rem',
					  'border-radius': '0.5rem',
					  margin: '1rem 0',
					  'word-break': 'break-word',
					  '@apply dark:bg-zinc-900 dark:border-zinc-800': {},
					},
					'div[data-node-type="callout-emoji"]': {
					  background: '#E2E8F0',
					  'border-radius': '0.5rem',
					  minWidth: '1.75rem',
					  width: '1.75rem',
					  height: '1.5rem',
					  display: 'flex',
					  'margin-top': '0.3rem',
					  'justify-content': 'center',
					  'align-items': 'center',
					  'font-size': '1rem',
					  '@apply dark:bg-zinc-800': {},  // Dark mode styles
					}
				  },
				},
				dark: {
					css: {
						'div[data-node-type="callout"]': {
							color: colors.gray[200],  // Text color in dark mode
						},
					},
				},
			}),
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			boxShadow: {
				sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
				md: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("tailwindcss-animate")
	],
};
