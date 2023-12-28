import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    {
      pattern: /grid-cols-./,
    }
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'primary': '#151531',
      'secondary': '#421A92',
      'primary1': '#404BE3',
      'primary2': '#39BEFF',
      'pink': '#C051FF',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      night: {
        ...require("daisyui/src/theming/themes")["night"],
        primary: "404BE3",
        secondary: "#C051FF",
        'base-100': "#0a1020",
        success: "#0076E3",
        'success-content': "#FFFFFF",
        "accent-content":"#FFF",
        "neutral":"#161c2b",
        // "--border-btn": "2px"
        },
    },
      "light",],
    darkTheme: "night", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
export default config


//"react-elastic-carousel": "^0.11.5",