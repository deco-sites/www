import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

const FACTORS = [1, 2, 3];

type PixelDimmension = `${number}px`;

function extractDimmension(dimmension: PixelDimmension) {
  return Number(dimmension.replace(/(\d*)px/g, "$1"));
}

interface ImageSrcSetOptions {
  width: number | PixelDimmension;
  height: number | PixelDimmension;
}

function getImageSrcSet(
  imgUrl: string,
  { width: optWidth }: ImageSrcSetOptions,
) {
  const width = typeof optWidth === "string"
    ? extractDimmension(optWidth)
    : optWidth;

  // const height = typeof optHeight === "string"
  // ? extractDimmension(optHeight)
  // : optHeight;

  const srcSetList = FACTORS.map((factor) => {
    const reiscaledWidth = width * factor;
    // TODO: change this image loader
    // return `${imgUrl}-${reiscaledWidth}-${height * factor} ${reiscaledWidth}w`;
    return `${imgUrl} ${reiscaledWidth}w`;
  });

  return srcSetList.join(", ");
}

type ImageProp = h.JSX.HTMLAttributes<HTMLImageElement>;

interface Props
  extends Omit<ImageProp, "width" | "height" | "preload">, ImageSrcSetOptions {
  alt: string;
  src: string;
  fetchpriority?: string;
  preload?: boolean;
}

export default function Image({ preload, ...props }: Props) {
  const { src, width, height, sizes = "100vw" } = props;
  const imageSrcSet = getImageSrcSet(src, {
    width: width ?? 360,
    height: height ?? 360,
  });

  return (
    <>
      {preload && (
        <Head>
          <link
            as="image"
            rel="preload"
            href={src}
            // @ts-expect-error If you see the HTMLLinkElement prop imageSizes and imageSrcset exists
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-imagesrcset
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-imagesizes
            imageSizes={sizes}
            imageSrcset={imageSrcSet}
            fetchpriority={props.fetchpriority}
          />
        </Head>
      )}
      <img
        {...props}
        sizes={sizes}
        srcSet={imageSrcSet}
      />
    </>
  );
}
