import { h } from "preact";
import GitHubIcon from "$deco/components/ui/icons/GitHubIcon.tsx";
import LinkedInIcon from "$deco/components/ui/icons/LinkedInIcon.tsx";
import LogoDeco from "$deco/components/ui/icons/LogoDeco.tsx";

export interface Props {
  anchor: string;
}

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

export default function Footer({ anchor }: Props) {
  return (
    <footer class="bg-secondary-dark">
      <nav
        class="container max-w-[1536px] mx-auto px-0 md:px-10 py-8 text-white text-sm"
        aria-label="Deco Menu"
      >
        <ul
          role="menubar"
          aria-label="Deco Menu"
          class="flex justify-center gap-4 items-center p-4"
        >
          <li role="none" class="w-full h-8 mr-auto px-2">
            <NavAnchor aria-label="Logo da Deco na cor branca" href="#">
              <LogoDeco color="#ffffff" class="h-6" />
            </NavAnchor>
          </li>
          <li
            role="none"
            class="hidden text-white lg:block ml-auto w-[28%] h-8 lg:h-auto"
          >
            <NavAnchor
              aria-label="Entrega completa, do design ao código"
              href="#"
            >
              {anchor}
            </NavAnchor>
          </li>

          <li role="none" class="px-2">
            <NavAnchor
              href="https://www.linkedin.com/company/deco-cx/"
              target="_blank"
              aria-label="Link para o perfil do LinkedIn da Deco"
            >
              <div class="w-full h-8 lg:h-auto">
                <LinkedInIcon />
              </div>
            </NavAnchor>
          </li>

          <li role="none" class="px-2">
            <NavAnchor
              href="https://github.com/deco-cx"
              target="_blank"
              aria-label="Link para o perfil do GitHub da Deco"
            >
              <div class="w-full h-8 lg:h-auto">
                <GitHubIcon />
              </div>
            </NavAnchor>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
