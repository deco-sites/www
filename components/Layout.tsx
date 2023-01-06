import LiveAnalytics from "$live/components/LiveAnalytics.tsx";
import type { JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  pathname: string;
}

export default function Layout(
  { pathname, class: className = "", children, ...otherProps }: Props,
) {
  return (
    <>
      <LiveAnalytics path={pathname} />
      <div
        class={`min-h-screen bg-[#67CE87] dark:bg-primary-dark text-primary-dark ${className}`}
        {...otherProps}
      >
        {children}
      </div>
    </>
  );
}
