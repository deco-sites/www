import { ErrorPageProps } from "$fresh/server.ts";
import LiveAnalytics from "$live/components/LiveAnalytics.tsx";

export default function NotFoundPage(props: ErrorPageProps) {
  return (
    <>
      <LiveAnalytics path={props.url.pathname} />
      <div
        class={`bg-white dark:bg-deco-black min-h-screen flex justify-center text-gray-800 dark:text-primary-light w-full`}
      >
        <div class="max-w-2xl m-4">
          <p>404: Page not found {(props.error as Error)?.message}</p>
        </div>
      </div>
    </>
  );
}
