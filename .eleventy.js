module.exports = function (eleventyConfig) {
  // Copy the assets folder to the output
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy({ 'node_modules/@ce/transliteration/translit.js': 'assets/repositories/chechen-transliterator/translit.js'});

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
  };
};
