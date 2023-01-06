import { h } from "preact";
import LogoDeco from "./ui/icons/LogoDeco.tsx";
import { t } from "$deco/i18n/runtime.ts";

function NavAnchor(
  { children, ...props }: h.JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      role="menuitem"
      {...props}
    >
      {children}
    </a>
  );
}

export default function Header() {
  return (
    <header class="bg-primary-light flex justify-center">
      <nav
        class="container px-4 sm:mx-8 pt-8 pb-4 text-secondary-dark "
        aria-label="Deco Menu"
      >
        <ul
          role="menubar"
          aria-label="Deco Menu"
          class="flex justify-between gap-4 items-center"
        >
          <li role="none">
            <NavAnchor aria-label="Logo da Deco na cor verde" href="#">
              <LogoDeco color="#2FD180" class="h-7" />
            </NavAnchor>
          </li>
          <li role="none" class="hidden md:block ml-auto pr-10 hover:underline">
            <NavAnchor class="hover:cursor-pointer" href="#platform">
              {t("admin.header.platform")}
            </NavAnchor>
          </li>
          <li role="none" class="hidden pr-10 hover:underline">
            <NavAnchor aria-label="Link com os preços" href="#">
              {t("admin.header.price")}
            </NavAnchor>
          </li>
          <li role="none" class="hidden md:block pr-10 hover:underline">
            <NavAnchor
              aria-label="Link para o Deco Camp"
              href="https://deco.camp/"
              target="_blank"
            >
              {t("admin.header.camp")}
            </NavAnchor>
          </li>
          <li
            role="none"
            class=" hidden md:block "
          >
            <NavAnchor
              class="block bg-white rounded-xl border border-secondary-dark px-6 py-2.5 w-full h-full hover:shadow-lg"
              href="#scheduleDemo"
            >
              {t("admin.header.schedule")}
            </NavAnchor>
          </li>
        </ul>
      </nav>
    </header>
  );
}
