/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './content/**/*.{md,vue}'],
  theme: {
    extend: {
      boxShadow: {
        zt_shadow_two: '0px 0px 8px 0px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        zt_purple: '#9b26b6',
      },
      // fontFamily: {
      //   sans: ['Noto Sans', 'sans-serif']
      // },
      // fontFamily: {
      //   sans: ['NotoSans-Regular', 'sans-serif'],
      // },
      fontFamily: {
        zt_regular: ['Inter-Regular'],
        zt_medium: ['Inter-Medium'],
        zt_semibold: ['Inter-SemiBold'],
        zt_bold: ['Inter-Bold'],
        zt_black: ['Inter-Black'],
        zt_light: ['Inter-Light'],
        zt_extra_light: ['Inter-ExtraLight'],
        zt_extra_bold: ['Inter-ExtraBold'],
        zt_thin: ['Inter-Thin'],
      },
    },

  },
  plugins: [],
  safelist: ['text-yellow-400'],
}
