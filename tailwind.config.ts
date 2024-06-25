import type { Config } from "tailwindcss";
import { colors } from './src/styles/theme';

const config: Config = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors : {
          theme : colors,
        },
        width : {
          'minimumWidth' : '1024px'
        }
      },
    },
    plugins: [],
  }

export default config;