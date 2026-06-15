import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A1A1A',
          amber: '#C8865A',
          cream: '#F5EDE0',
          warm: '#FAFAF7',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
        serif: ['"Noto Serif KR"', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
