import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'glitch': 'glitch 8s infinite',
  			'glitch-2': 'glitch-2 8s infinite',
  			'glitch-3': 'glitch-3 8s infinite',
  			'glitch-4': 'glitch-4 8s infinite',
  		},
  		keyframes: {
  			glitch: {
  				'0%, 100%': { transform: 'translate(0)' },
  				'88%, 90%': { transform: 'translate(-2px, 2px)' },
  				'92%, 94%': { transform: 'translate(2px, -2px)' },
  				'96%, 98%': { transform: 'translate(-2px, -2px)' },
  			},
  			'glitch-2': {
  				'0%, 100%': { transform: 'translate(0)' },
  				'88%, 90%': { transform: 'translate(2px, -2px)' },
  				'92%, 94%': { transform: 'translate(-2px, 2px)' },
  				'96%, 98%': { transform: 'translate(2px, 2px)' },
  			},
  			'glitch-3': {
  				'0%, 100%': { transform: 'translate(0)' },
  				'88%, 90%': { transform: 'translate(-2px, 0)' },
  				'92%, 94%': { transform: 'translate(2px, 0)' },
  				'96%, 98%': { transform: 'translate(0, 2px)' },
  			},
  			'glitch-4': {
  				'0%, 100%': { transform: 'translate(0) scale(1)' },
  				'88%, 90%': { transform: 'translate(0, -2px) scale(1.1)' },
  				'92%, 94%': { transform: 'translate(0, 2px) scale(0.9)' },
  				'96%, 98%': { transform: 'translate(0) scale(1.2)' },
  			},
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
