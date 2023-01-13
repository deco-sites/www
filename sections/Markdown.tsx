import { LoaderReturnType } from "$live/std/types.ts";
import Markdown from "$live/std/ui/components/Markdown.tsx";
export type Props = {
  text: LoaderReturnType<string>;
};

export default function MarkdownContainer(props: Props) {
  return (
    <div class="bg-white relative overflow-hidden -mt-4">
      <section class="container mx-auto px-4 pt-16 pb-40 text-primary-dark max-w-4xl">
        <Markdown {...props}></Markdown>
      </section>
    </div>
  );
}
