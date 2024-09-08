import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // 'sm': '640px',   // Small devices
        // 'md': '768px',   // Medium devices
        // 'lg': '1024px',  // Large devices
        'co-xl': '1250px',  // Extra large devices
        // '2xl': '1536px', // 2x Extra large devices
        'xs': '480px',   // Extra small devices
        // 'sm2': '500px',  // Custom small devices
        // 'md2': '700px',  // Custom medium devices
        // 'xmd': '800px',
        // 'lg2': '900px',  // Custom large devices
      },
    },
  },
  plugins: [],
};
export default config;
