/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        generalRegular: ["general-regular"],
        generalMedium: ["general-medium"],
        generalSemiBold: ["general-semibold"],
      },
      textColor: {
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
        primary: "rgba(var(--primary), <alpha-value>)",
        green: "rgba(var(--green), <alpha-value>)",
      },
      backgroundColor: {
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
        primary: "rgba(var(--primary), <alpha-value>)",
        green: "rgba(var(--green), <alpha-value>)",
      },

      borderColor: {
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
        primary: "rgba(var(--primary), <alpha-value>)",
        green: "rgba(var(--green), <alpha-value>)",
      },
      colors: {
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
        primary: "rgba(var(--primary), <alpha-value>)",
        green: "rgba(var(--green), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
