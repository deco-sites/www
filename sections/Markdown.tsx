import { LoaderReturnType } from "$live/std/types.ts";
import Markdown from "$live/std/ui/components/Markdown.tsx";
export type Props = {
  text: LoaderReturnType<string>;
};

export default function MarkdownContainer(props: Props) {
  return (
    <div class="bg-white relative overflow-hidden -mt-4">
      <section class="container mx-auto px-4 pt-16 pb-40 lg:px-64 lg:py-20 text-primary-dark">
        <Markdown {...props}></Markdown>
      </section>
    </div>
  );
}
