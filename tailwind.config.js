/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./content/**/*.{md,vue}",],
  theme: {
    extend: {
      boxShadow: {
        'zt_shadow_two': '0px 0px 8px 0px rgba(0, 0, 0, 0.1)',
      },
      colors:{
        'zt_purple':'#9b26b6'
      },
      // fontFamily: {
      //   sans: ['Noto Sans', 'sans-serif']
      // },
      // fontFamily: {
      //   sans: ['NotoSans-Regular', 'sans-serif'],
      // },
      fontFamily: {
        zt_regular: ['Roboto-Regular'],
        zt_medium: ['Roboto-Medium'],
        zt_semibold: ['Roboto-SemiBold'],
        zt_bold: ['Roboto-Bold'],
        zt_black: ['Roboto-Black'],
        zt_light: ['Roboto-Light'],
        zt_extra_light: ['Roboto-ExtraLight'],
        zt_extra_bold: ['Roboto-ExtraBold'],
    },
    },

  },
  plugins: [],
  safelist:['text-yellow-400']
}

