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
  blogLabel: string;
  blogAriaLabel: string;
  scheduleLabel: string;
  
}

export default function Header({
  logoAriaLabel = "Logo da Deco na cor verde",
  platformLabel = "Plataforma",
  priceLabel = "Preço",
  blogLabel = "Blog",
  blogAriaLabel = "Link para o Blog",
  scheduleLabel = "Agende agora",
}: Props) {
  return (
    <header class="bg-[#113032] flex justify-center">
      <nav
        class="container px-4 sm:mx-8 py-6 text-white"
        aria-label="Deco Menu"
      >
        <ul
          role="menubar"
          aria-label="Deco Menu"
          class="flex justify-between gap-4 items-center"
        >
          <li role="none">
            <NavAnchor aria-label={logoAriaLabel} href="#">
              <LogoDeco color="#2FD180" class="h-8" />
            </NavAnchor>
          </li>
          {/* TODO: FAZER UM MAP NESSES <li> abaixo */}
          <li role="none" class="hidden md:block ml-auto pr-10">
            <NavAnchor class="hover:cursor-pointer hover:underline" href="#platform">
              {platformLabel}
            </NavAnchor>
          </li>
          <li role="none" class="hidden md:block pr-10">
            <NavAnchor aria-label="Link com os preços" href="#" class="hover:underline">
              {priceLabel}
            </NavAnchor>
          </li>
          <li role="none" class="hidden md:block pr-10">
            <NavAnchor
              class="hover:underline"
              aria-label={blogAriaLabel}
              href="https://deco.camp/"
              target="_blank"
            >
              {blogLabel}
            </NavAnchor>
          </li>
          <li role="none" class=" hidden md:block ">
            <NavAnchor
              class="block bg-white text-black rounded-full border border-secondary-dark px-8 py-2.5 w-full h-full hover:shadow-lg"
              href="#scheduleDemo"
            >
              {scheduleLabel}
            </NavAnchor>
          </li>
        </ul>
      </nav>
    </header>
  );
}
