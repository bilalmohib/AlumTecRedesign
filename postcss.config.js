module.exports = {
  plugins: [
    "postcss-preset-env",
    {
      // Specify the stage of features, or set it to 'autoprefixer' if you only want autoprefixer.
      stage: 1,
      features: {
        "nesting-rules": true, // Enable nesting for CSS Modules
      },
    },
    "tailwindcss",
    "autoprefixer",
  ],
};
