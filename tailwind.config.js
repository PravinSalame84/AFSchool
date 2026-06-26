/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
    },
    extend: {
      colors: {
        // Primary slate-blue scale, sampled directly from the brand swatch.
        // Air Force Blue
        AFB: '#5D8AA8',
        // IAF Ensign (Flag) Colors
        AFGFlagBlueBG: '#1D213C',
        AFGIndianSaffron: '#FF671F',
        AFGIndianWhite: '#FFFFFF',
        AFGIndianNavyBlue: '#06038D',
        AFGIndianGreen: '#046A38',
        navyColor : '#1D213C',
        // IAF Crest & Emblem Colors
        AfricanTurquoise: '#000000',
        BrilliantYellow: '#FFD707',
        Honey: '#E7AB33',
        BrightCyan: '#00D4FA',
        DigitalRed: '#FF0000',
        // Uniform & Combat Color Palette
        OuterSpace: '#1D213C',
        SilentBlue: '#BAE2EE',
        ElegantBlack: '#131313',
        primary: {
          50: '#BBCAD7',
          100: '#6789A6',
          200: '#5C7C96',
          300: '#526F86',
          400: '#486276',
          500: '#3E5465',
          600: '#344656',
          700: '#2A3946',
          800: '#202C36',
          900: '#161E25',
          950: '#0E1418',
        },
        // Soft sky background used across the site.
        skyback: {
          DEFAULT: '#BAE2EE',
          light: '#D7EFF6',
          soft: '#E4F6FB',
        },
        // Warm accent used for CTAs / highlights so they pop against the blues.
        accent: {
          DEFAULT: '#F0934B',
          dark: '#D97A2E',
          light: '#FBC998',
        },
      },
      fontFamily: {
        display: ['"Rajdhani"', '"Segoe UI"', 'sans-serif'],
        body: ['"Manrope"', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(22, 30, 37, 0.25)',
        soft: '0 4px 18px rgba(22, 30, 37, 0.08)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        radarPulse: {
          '0%': { transform: 'scale(0.92)', opacity: '0.15' },
          '50%': { transform: 'scale(1)', opacity: '0.35' },
          '100%': { transform: 'scale(1.08)', opacity: '0.1' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
        marquee: 'marquee 30s linear infinite',
        floatY: 'floatY 4s ease-in-out infinite',
        radarPulse: 'radarPulse 6s ease-in-out infinite',
        spinSlow: 'spinSlow 18s linear infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx}'],

//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: '1rem',
//         sm: '1.5rem',
//         lg: '2rem',
//       },
//     },

//     extend: {
//       colors: {
//         // Brand Colors
//         primary: {
//           DEFAULT: '#5D8AA8', // Air Force Blue
//           light: '#BBCAD7',
//           dark: '#3E5465',
//           50: '#EEF4F7',
//           100: '#DCE8EF',
//           200: '#BBCAD7',
//           300: '#95AEC3',
//           400: '#789AB5',
//           500: '#5D8AA8',
//           600: '#4A6F86',
//           700: '#3B596B',
//           800: '#2A404D',
//           900: '#1A2830',
//         },

//         secondary: {
//           DEFAULT: '#1D213C', // IAF Navy
//           light: '#34395F',
//           dark: '#111426',
//         },

//         accent: {
//           DEFAULT: '#FFD707', // Crest Gold
//           light: '#FFE45A',
//           dark: '#D4A200',
//         },

//         success: '#046A38', // Indian Green
//         warning: '#FF671F', // Saffron
//         danger: '#FF0000',
//         info: '#00D4FA',

//         background: {
//           DEFAULT: '#F8FBFD',
//           sky: '#BAE2EE',
//           soft: '#E4F6FB',
//         },

//         surface: {
//           DEFAULT: '#FFFFFF',
//           muted: '#F3F6F9',
//         },

//         text: {
//           DEFAULT: '#131313',
//           light: '#5F6B7A',
//           inverse: '#FFFFFF',
//         },
//       },

//       fontFamily: {
//         display: ['Poppins', 'sans-serif'],
//         body: ['Inter', 'sans-serif'],
//       },

//       borderRadius: {
//         xl2: '1.25rem',
//       },

//       boxShadow: {
//         soft: '0 4px 18px rgba(22,30,37,0.08)',
//         card: '0 10px 30px -12px rgba(22,30,37,0.25)',
//       },

//       keyframes: {
//         fadeUp: {
//           '0%': {
//             opacity: 0,
//             transform: 'translateY(24px)',
//           },
//           '100%': {
//             opacity: 1,
//             transform: 'translateY(0)',
//           },
//         },

//         marquee: {
//           '0%': {
//             transform: 'translateX(0)',
//           },
//           '100%': {
//             transform: 'translateX(-50%)',
//           },
//         },

//         floatY: {
//           '0%,100%': {
//             transform: 'translateY(0)',
//           },
//           '50%': {
//             transform: 'translateY(-10px)',
//           },
//         },
//       },

//       animation: {
//         fadeUp: 'fadeUp .7s ease forwards',
//         marquee: 'marquee 30s linear infinite',
//         floatY: 'floatY 4s ease-in-out infinite',
//       },
//     },
//   },

//   plugins: [],
// };
