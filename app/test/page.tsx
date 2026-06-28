import { MDXRemote } from "next-mdx-remote/rsc";

const source = `
| Name | Age |
| ---- | ---:|
| Yash | 26 |
| John | 30 |
`;

export default function TestPage() {
  return (
    <div className="prose mx-auto p-10">
      <MDXRemote source={source} />
    </div>
  );
}