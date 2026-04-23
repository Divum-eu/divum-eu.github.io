import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory("src");
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};