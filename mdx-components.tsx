import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

import BlogImage from "@/components/blog/BlogImage";
import { slugify } from "@/lib/content/slugify";

function getText(children: ReactNode): string {
  if (typeof children === "string") return children;

  if (Array.isArray(children)) {
    return children
      .map((child) => getText(child))
      .join("");
  }

  if (
    children &&
    typeof children === "object" &&
    "props" in children
  ) {
    if (
      typeof children === "object" &&
      children !== null &&
      "props" in children
    ) {
      const element = children as React.ReactElement<{
        children?: ReactNode;
      }>;
    
      return getText(element.props.children);
    }
  }

  return "";
}

const components: MDXComponents = {
  Image: BlogImage,

  h2: ({ children, ...props }) => {
    const id = slugify(getText(children));

    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    );
  },

  h3: ({ children, ...props }) => {
    const id = slugify(getText(children));

    return (
      <h3 id={id} {...props}>
        {children}
      </h3>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}