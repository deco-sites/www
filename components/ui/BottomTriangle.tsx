import { h } from "preact";

export default function BottomTriangle(
  { class: className = "", children, ...otherProps }: h.JSX.HTMLAttributes<
    HTMLDivElement
  >,
) {
  return (
    <div
      class={`absolute bottom-0 w-full h-24 ${className}`}
      {...otherProps}
      style="clip-path: polygon(0 80%, 100% 25%, 100% 100%, 0 100%); margin-bottom: -1px"
    >
      {children}
    </div>
  );
}
