// Copied mostly from: https://github.com/denoland/fresh/blob/744a10e5911df38bff779686c86ca10fb4589dfe/www/routes/docs/%5B...slug%5D.tsx
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { frontMatter, gfm } from "$start/components/utils/markdown.ts";

import Header from "$start/sections/Header.tsx";
import DocsTitle from "$start/components/ui/docs/DocsTitle.tsx";
import {
  SLUGS,
  TABLE_OF_CONTENTS,
  TableOfContentsEntry,
} from "$start/components/ui/docs/docs.ts";
import DocsSidebar from "../../components/ui/docs/DocsSidebar.tsx";
import Footer from "../../sections/Footer.tsx";
import {
  getMenuDataForLanguage,
  getNextAndPreviousPost,
  getTitleForPost,
  MenuData,
} from "../../docs/toc.ts";
import BlogHeader from "../../sections/BlogHeader.tsx";

interface Data {
  page: Page;
}

interface Page extends Pick<TableOfContentsEntry, "href" | "title" | "slug"> {
  markdown: string;
  data: Record<string, unknown>;
  menu: MenuData;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const reqUrl = new URL(req.url);

    const slug = ctx.params.slug;
    const [language, ...rest] = slug.split("/");

    if (!rest?.length) {
      return new Response(null, {
        status: 307,
        headers: { location: `/docs/${language || "en"}/introduction/overview` },
      });
    }

    // TODO: If slug matches a folder, send to first arcticle

    const documentSlug = rest.join("/");

    // const entry = TABLE_OF_CONTENTS[documentSlug];

    // if (!entry) {
    //   return ctx.renderNotFound();
    // }

    const url = new URL(
      `../../docs/${documentSlug}/${language}.md`,
      import.meta.url,
    );

    const fileContent = await Deno.readTextFile(url);
    // TODO: Fix performance/images (part of markdown is invalid)
    const { body, attrs } = frontMatter<Record<string, unknown>>(fileContent);
    // const page = { ...entry, markdown: body, data: attrs ?? {} };
    const menu = getMenuDataForLanguage(language as "pt" | "en");
    const title = getTitleForPost(language as "en", documentSlug) || "Document";

    const page = {
      markdown: body,
      data: attrs ?? {},
      slug: documentSlug,
      title,
      href: reqUrl.pathname,
      menu,
    };
    const resp = ctx.render({ page });
    return resp;
  },
};

export default function DocsPage(props: PageProps<Data>) {
  let description;

  if (props.data.page.data.description) {
    description = String(props.data.page.data.description);
  }

  return (
    <>
      <Head>
        <title>{props.data.page?.title ?? "Not Found"} | deco.cx docs</title>
        <link rel="stylesheet" href={`/gfm.css?build=${__FRSH_BUILD_ID}`} />
        {description && <meta name="description" content={description} />}
      </Head>
      <div class="flex flex-col min-h-screen">
        <BlogHeader logoAriaLabel="Logo Deco" />
        <div class="flex-1">
          <input
            type="checkbox"
            class="hidden toggle"
            id="docs_sidebar"
            autocomplete="off"
          >
          </input>
          {/* Fix mobile sidebar */}
          <div class="fixed inset-0 z-40 hidden toggled">
            <label
              class="absolute inset-0 bg-gray-600 opacity-75"
              for="docs_sidebar"
            />
            <div class="relative flex-1 flex flex-col w-[16rem] h-full bg-white border(r-2 gray-100)">
              <div class="p-4 border(b-2 gray-100) bg-[##C5FFE9]">
                <DocsTitle title="docs" />
              </div>
              <nav class="pt-6 pb-16 px-4 overflow-x-auto">
                <DocsSidebar
                  mobile
                  path={props.url.pathname}
                  menu={props.data.page.menu}
                />
              </nav>
            </div>
          </div>
          <div class="flex mx-auto max-w-screen-lg px-4 py-5 justify-end">
            <label
              for="docs_sidebar"
              class="px-4 py-3 md:hidden flex items-center hover:bg-gray-100 rounded gap-2"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                >
                </path>
              </svg>
              <div>Menu</div>
            </label>
          </div>
          <div class="mx-auto max-w-screen-lg px-4 flex gap-6">
            {/* Desktop Sidebar */}
            <nav class="w-[16rem] flex-shrink-0 hidden md:block py-8 pr-4 border(r-2 gray-100)">
              <DocsSidebar
                path={props.url.pathname}
                menu={props.data.page.menu}
              />
            </nav>
            <Content page={props.data.page} />
          </div>
        </div>
        <Footer anchor="/" />
      </div>
    </>
  );
}

function Content(props: { page: Page }) {
  const html = gfm.render(props.page.markdown);
  return (
    <main class="py-6 overflow-hidden">
      <h1 class="text(4xl gray-900) tracking-tight font-extrabold mt-6">
        {props.page.title}
      </h1>
      <div
        class="mt-6 markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <ForwardBackButtons
        language={props.page.href.includes("/pt/") ? "pt" : "en"}
        slug={props.page.slug}
      />
    </main>
  );
}

const button = "p-2 bg-gray-100 w-full border(1 gray-200) grid";

function ForwardBackButtons(props: { slug: string; language: string }) {
  console.log({ props });
  const nextLabel = props.language === "en" ? "Next" : "Próximo";
  const previousLabel = props.language === "en" ? "Previous" : "Anterior";

  const { next, previous } = getNextAndPreviousPost(
    props.language as "en",
    props.slug,
  );
  const upper = "text(sm gray-600)";
  const category = "font-normal";
  const lower = "text-gray-900 font-medium";

  return (
    <div class="mt-8 flex flex(col md:row) gap-4">
      {previous && (
        <a href={previous.href} class={`${button} text-left`}>
          <span class={upper}>{`← ${previousLabel}`}</span>
          <span class={lower}>
            <span class={category}>{previous.category ?? ""}</span>
            {previous.title}
          </span>
        </a>
      )}
      {next && (
        <a href={next.href} class={`${button} text-right`}>
          <span class={upper}>{`${nextLabel} →`}</span>
          <span class={lower}>
            <span class={category}>{next.category ?? ""}</span>
            {next.title}
          </span>
        </a>
      )}
    </div>
  );
}
