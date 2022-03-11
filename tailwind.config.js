module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
}
