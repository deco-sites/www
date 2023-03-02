import { LoaderReturnType } from "$live/types.ts";
import Markdown from "deco-sites/std/components/Markdown.tsx";

export type Props = {
  text: LoaderReturnType<string>;
};

export default function MarkdownContainer(props: Props) {
  return (
    <div class="bg-white relative overflow-hidden -mt-4">
      <section class="max-w-4xl mx-auto px-4 pt-16 pb-40 text-primary-dark">
        <Markdown {...props}></Markdown>
      </section>
    </div>
  );
}
