import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

type Props = {
  source: string;
};

export default function MDXContent({ source }: Props) {
  return (
    <div
    className="
      prose
      prose-lg
      prose-zinc
      max-w-none
  
      prose-headings:scroll-mt-24
      prose-headings:font-bold
  
      prose-a:text-blue-600
      prose-a:no-underline
      hover:prose-a:underline
  
      prose-img:rounded-xl
      prose-img:shadow-lg
  
      prose-pre:rounded-xl
      prose-pre:border
      prose-pre:bg-zinc-900
  
      dark:prose-invert

      prose-pre:overflow-x-auto
    prose-pre:p-0
    prose-code:before:content-none
    prose-code:after:content-none
    "
  >
      <MDXRemote
        source={source}
        components={useMDXComponents()}
      />
    </div>
  );
}