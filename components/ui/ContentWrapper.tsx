import type { h } from "preact";

interface ContentWrapperProps extends h.JSX.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  contentWrapperClass: string;
  titleClass: string;
  contentClass: string;
}
export default function ContentWrapper(
  {
    title,
    content,
    contentWrapperClass: className = "",
    titleClass: titleClassName = "",
    contentClass: contentClassName = "",
  }: Partial<ContentWrapperProps>,
) {
  return (
    <div class={`pb-10 ${className}`}>
      <h2
        class={`font-semibold pb-2.5 text-2xl ${titleClassName}`}
      >
        {title}
      </h2>
      <p class={`md:text-2xl text-xl ${contentClassName}`}>
        {content}
      </p>
    </div>
  );
}
