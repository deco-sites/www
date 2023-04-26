import { LoaderReturnType } from "$live/std/types.ts";
import Markdown from "$live/std/ui/components/Markdown.tsx";
import Carousel from "./Carrousel.tsx";

export type Props = {
  text: LoaderReturnType<string>;
  cards: Array<{
    urlImage: string;
    title: string;
    author: string;
    date: string;
  }>;  
  };

export default function MarkdownContainer(props:Props) {
   return (
    <div class="bg-white mt-4">
      <section class="max-w-4xl mx-auto px-8 sm:px-0 text-primary-dark mt-8">
        <Markdown {...props}></Markdown>
      </section>
      <div class="mt-6 overflow-x-hidden">
        <Carousel cards={props.cards}/>
      </div>
    </div>
  );
}

