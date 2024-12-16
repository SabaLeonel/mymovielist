import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.tsx"],
	theme: {
    	container: {
    		center: true,
    		padding: '1rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		fontFamily: {
    			sans: [
    				'var(--font-geist-sans)',
                    ...fontFamily.sans
                ]
    		},
    		animation: {
    			fadeUp: 'fadeUp .5s ease-in-out',
    			fadeDown: 'fadeDown .5s ease-in-out',
    			zoomIn: 'ZoomIn .6s ease-in-out',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		keyframes: {
    			fadeDown: {
    				from: {
    					opacity: '0',
    					transform: 'translateY(-30px) scale(0.9)'
    				},
    				to: {
    					opacity: '1',
    					transform: 'translateY(0px) scale(1)'
    				}
    			},
    			fadeUp: {
    				from: {
    					opacity: '0',
    					transform: 'translateY(30px) scale(0.9)'
    				},
    				to: {
    					opacity: '1',
    					transform: 'translateY(0px) scale(1)'
    				}
    			},
    			ZoomIn: {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(.9)'
    				},
    				'60%': {
    					transform: 'scale(1)'
    				},
    				'80%': {
    					transform: 'scale(1.01)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		aspectRatio: {
    			poster: '2 / 3'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
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
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
