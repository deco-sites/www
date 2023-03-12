import { MenuData } from "../../../docs/toc.ts";
import {
  CATEGORIES,
  TableOfContentsCategory,
  TableOfContentsCategoryEntry,
} from "./docs.ts";
import DocsLanguageSwitcher from "./DocsLanguageSwitcher.tsx";
import JoinDiscord from "./JoinDiscord.tsx";
// import SearchButton from "$start/islands/SearchButton.tsx";

interface Props {
  menu: MenuData;

  path: string;
  mobile?: boolean;
}
export default function DocsSidebar(props: Props) {
  console.log(props);
  const id = String(Math.random()).replaceAll(".", "");
  return (
    <>
      {/* Reenable this after we setup Algolia */}
      {/* {props.mobile
        ? (
          <button
            type="button"
            class="bg-gray-200 font-bold text-gray-400 rounded-full py-1 px-2 w-full mb-2"
            // @ts-ignore: Inline event handler
            onClick={`document.querySelector(".DocSearch.DocSearch-Button").click()`}
          >
            <span class="DocSearch-Button-Container">
              <svg
                width="20"
                height="20"
                class="DocSearch-Search-Icon"
                viewBox="0 0 20 20"
              >
                <path
                  d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                  stroke="currentColor"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                </path>
              </svg>
              <span class="DocSearch-Button-Placeholder">Search</span>
            </span>
          </button>
        )
        : <SearchButton />} */}

      <DocsLanguageSwitcher currentPathname={props.path} />
      <ol class="list-decimal list-inside font-semibold nested">
        {props.menu.map(({ children, href, title }) => (
          <li class="my-2 block">
            <a
              href={href}
              class={`${
                href !== props.path
                  ? "text(gray-900 hover:gray-600)"
                  : "text(green-600 hover:green-500)"
              }`}
            >
              {title}
            </a>
            {!!children?.length && (
              <ol class="pl-4 list-decimal nested">
                {children.map(({ title, href }) => (
                  <li class="my-0.5">
                    <a
                      href={href}
                      class={`font-normal ${
                        href !== props.path
                          ? "text(gray-900 hover:gray-600)"
                          : "text(green-600 hover:green-500)"
                      }`}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
      {/* TODO: Fix intl for /docs */}
      <JoinDiscord language={props.path.includes("/pt/") ? "pt" : "en"} />
    </>
  );
}
