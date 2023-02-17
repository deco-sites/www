import { h } from "preact";
import LogoDeco from "../components/ui/icons/LogoDeco.tsx";

function NavAnchor({
  children,
  ...props
}: h.JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a role="menuitem" {...props}>
      {children}
    </a>
  );
}

export interface Props {
  logoAriaLabel: string;
  platformLabel: string;
  priceLabel: string;
  campLabel: string;
  campAriaLabel: string;
  scheduleLabel: string;
  blogAriaLabel: string
  blogLabel: string
}

export default function Header({
  logoAriaLabel = "Logo da Deco na cor verde",
  platformLabel = "Plataforma",
  priceLabel = "Preço",
  campLabel = "Deco Camp",
  campAriaLabel = "Link para o Deco Camp",
  scheduleLabel = "Agende já",
  blogAriaLabel = "Link para o blog",
  blogLabel = "Blog",
}: Props) {

  return (
    <header class="bg-primary-light flex justify-center">
      <nav
        class="container px-4 sm:mx-8 py-8 text-secondary-dark"
        aria-label="Deco Menu"
      >
        <ul
          role="menubar"
          aria-label="Deco Menu"
          class="flex justify-between gap-4 items-center"
        >
          <li role="none">
            <NavAnchor aria-label={logoAriaLabel} href="#">
              <LogoDeco color="#2FD180" class="h-7" />
            </NavAnchor>
          </li>
          <li role="none" class="hidden md:block ml-auto pr-10 hover:underline">
            <NavAnchor
              class="hover:cursor-pointer"
              href="https://www.deco.cx/#platform"
            >
              {platformLabel}
            </NavAnchor>
          </li>
          <li role="none" class="hidden pr-10 hover:underline">
            <NavAnchor
              aria-label="Link com os preços"
              href="https://www.deco.cx"
            >
              {priceLabel}
            </NavAnchor>
          </li>
          <li role="none" class="hidden md:block pr-10 hover:underline">
            <NavAnchor
              aria-label={campAriaLabel}
              href="https://deco.camp/"
              target="_blank"
            >
              {campLabel}
            </NavAnchor>
          </li>
          <li role="none" class="hidden md:block pr-10 hover:underline">
            <NavAnchor
              aria-label={blogAriaLabel}
              href="https://www.deco.cx/blog"
              target="_blank"
            >
              {blogLabel}
            </NavAnchor>
          </li>
          <li role="none" class="hidden md:block">
            <NavAnchor
              class="block bg-white rounded-xl border border-secondary-dark px-6 py-2.5 w-full h-full hover:shadow-lg"
              href="https://www.deco.cx/#scheduleDemo"
            >
              {scheduleLabel}
            </NavAnchor>
          </li>
        </ul>
      </nav>
    </header>
  );
}
