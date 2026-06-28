import Image from "next/image";

type BlogImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function BlogImage({
  src,
  alt,
  caption,
}: BlogImageProps) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className="w-full rounded-xl border shadow-md"
      />

      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}