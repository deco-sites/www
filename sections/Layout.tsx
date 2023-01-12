import LiveAnalytics from "$live/components/LiveAnalytics.tsx";
import type { JSX } from "preact";

export interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  /** @description This is a section with inner sections. Remove this after the editor supports it. */
  warning?: string;
}

/**
 * Experimental section with children
 */
export default function Layout({ children }: Props) {
  return (
    <>
      <LiveAnalytics path={window?.location?.href} />
      <div
        class={`min-h-screen bg-[#67CE87] dark:bg-primary-dark text-primary-dark`}
      >
        {children}
      </div>
    </>
  );
}
