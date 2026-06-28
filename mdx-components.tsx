import type { MDXComponents } from "mdx/types";
import BlogImage from "@/components/blog/BlogImage";

const components: MDXComponents = {
  Image: BlogImage,
};

export function useMDXComponents(): MDXComponents {
  return components;
}