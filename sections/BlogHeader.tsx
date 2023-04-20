import { h } from "preact";
import LogoDeco from "../components/ui/icons/LogoDeco.tsx";
import ArrowDown from "../components/ui/icons/ArrowDown.tsx";
import Button from "../components/ui/Button.tsx";

export interface Item {
  label: string;
  href: string;
}
export interface Idioma{
  label: string;
}

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
  sections: Item[];
 }

const navAnchors = [
  {
    label: "Plataforma",
    ariaLabel: "Link para a plataforma",
    class: "hover:cursor-pointer hover:underline",
    href: "/",
  },
  {
    label: "Blog",
    ariaLabel: "Link para o Blog",
    class: "hover:underline ml-10",
    href: "/blog",
    target: "_blank",
  },
  {
    label: "Agende agora",
    ariaLabel: "Link para agendar uma demo",
    class:
      "block bg-white text-black rounded-full border border-secondary-dark px-8 py-2.5 w-full h-full hover:shadow-lg ml-10",
    href: "/",
  },
];

export default function BlogHeader({
  logoAriaLabel = "Logo da Deco na cor verde",
  sections =[],
}: Props) {
  return (
    //TODO: Traduções
    <header class="bg-black flex justify-center relative">
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
            <div class="flex items-center">
              <NavAnchor aria-label={logoAriaLabel} href="#">
                <LogoDeco color="#2FD180" class="h-8" />
              </NavAnchor>
              <div class="hidden lg:block">
                <div class="pt-2 pl-2 flex items-center gap-0.5">
                  <small>for marketers</small>
                  <ArrowDown />
              </div>
              </div>
            </div>
          </li>
          <div>
            <ul class="hidden md:block">
            {sections && sections.map((section)=>
            (
              <li class="pr-4 inline-block">
                <a href={section.href} class="text-custom-white text-xl">{section.label}</a>
              </li>
            ))}
            </ul>
          </div>
          <div class="flex items-center gap-4">
            <ul>
              <li><a href=""class="text-custom-button">Log in</a></li>
            </ul>
            <Button variant="custom">Sign up</Button>
          </div>         
        </ul>
      </nav>
          <div class=" absolute bg-gradient-to-r from-green-400 to-black h-1 w-1/2 bottom-0 left-0"></div>
    </header>
  );
}
