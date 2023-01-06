import { ErrorPageProps } from "$fresh/server.ts";
import LiveAnalytics from "$live/components/LiveAnalytics.tsx";

export default function Error500Page({ url, error }: ErrorPageProps) {
  return (
    <>
      <LiveAnalytics path={url.pathname} />
      <div
        class={`bg-white dark:bg-deco-black min-h-screen flex justify-center text-gray-800 dark:text-primary-light w-full`}
      >
        <div class="max-w-2xl m-4">
          <p>500 internal error: {(error as Error).message}</p>
          <p>{(error as Error)?.stack}</p>
        </div>
      </div>
    </>
  );
}
