const eleventyVue = require("@11ty/eleventy-plugin-vue");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyVue);
  eleventyConfig.addPassthroughCopy("src");
  eleventyConfig.addPassthroughCopy("s_src/assets/images");
  eleventyConfig.addPassthroughCopy("s_src/src");
  return {
    dir: {
      input: "s_src"
    }
  }
};
