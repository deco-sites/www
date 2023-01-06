import { h } from "preact";

interface Props extends h.JSX.HTMLAttributes<HTMLDivElement> {
  color?: `#${string}`;
  gradientDirection?: "r" | "br" | "tr" | "tl";
}

export default function SquareGlass(
  {
    children,
    class: classNames,
    color,
    gradientDirection = "br",
    ...otherProps
  }: Props,
) {
  return (
    <div
      class={`absolute rounded-[20px] rotate-[32deg] w-72 h-80 lg:w-[28.055rem] lg:h-[40.861rem] bg-gradient-to-${gradientDirection} from-[${color}]   ${classNames}`}
      {...otherProps}
    >
      {children}
    </div>
  );
}
