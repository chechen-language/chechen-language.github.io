module.exports = function (eleventyConfig) {
  // Copy the assets folder to the output
  eleventyConfig.addPassthroughCopy('src/assets');

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    pathPrefix: '/',
  };
};
