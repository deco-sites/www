import { LoaderReturnType } from "$live/std/types.ts";
import Markdown from "$live/std/ui/components/Markdown.tsx";
export type Props = {
  text: LoaderReturnType<string>;
};

export default function MarkdownContainer(props: Props) {
  return (
    <div class="bg-white relative overflow-hidden mt-4">
      <section class="max-w-4xl mx-auto px-4 sm:px-0 pb-48 text-primary-dark">
        <Markdown {...props}></Markdown>
      </section>
    </div>
  );
}
