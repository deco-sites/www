import { LoaderReturnType } from "$live/std/types.ts";
import Markdown from "$live/std/ui/components/Markdown.tsx";

export interface Props {
  menu: LoaderReturnType<string>;
  content: LoaderReturnType<string>;
}

export default function DocsLayout({ menu, content }: Props) {
  return (
    <div class="flex w-full h-full min-h-[400px]">
      <nav class="w-[300px]">
        <Markdown text={menu} />
      </nav>
      <main class="w-full">
        <Markdown text={content} />
      </main>
    </div>
  );
}
