import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      xl: { max: '1700px' },
      lg: { max: '1300px' },
      md: { max: '905px' },
      sm: { max: '500px' },
      xs: { max: '325px' },
    },
  },
  plugins: [],
};
export default config;
