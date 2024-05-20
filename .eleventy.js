module.exports = function(eleventyConfig) {
  // Copy the assets folder to the output
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};