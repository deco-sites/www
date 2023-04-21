import { LoaderReturnType } from "$live/std/types.ts";
import Markdown from "$live/std/ui/components/Markdown.tsx";
import SlidePost from "../islands/SlidePost.tsx";

export type Props = {
  text: LoaderReturnType<string>;
};

export default function MarkdownContainer(props: Props) {
  return (
    <div class="bg-white relative overflow-hidden mt-4">
      <section class="max-w-4xl mx-auto px-8 sm:px-0 text-primary-dark mt-8">
        <Markdown {...props}></Markdown>
      </section>
      <div class="mt-6">
        <SlidePost texto1="slide1" texto2="slide2" texto3="slide3" texto4="slide4"/>
      </div>
    </div>
  );
}
