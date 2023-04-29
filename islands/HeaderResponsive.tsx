import { h } from "preact";
import LogoDeco from "../components/ui/icons/LogoDeco.tsx";
import Button from "../components/ui/Button.tsx";
import Switcher from "../islands/ChangeUser.tsx";

export interface Item {
  label: string;
  href: string;
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
    <div>
    <header class="bg-black relative w-full">
      <nav
        class="px-4 sm:mx-8 py-6 text-white"
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
                <Switcher/>
              </div>
            </div>
          </li>
          <div>
            <ul class="hidden md:hidden lg:block md:pr-6">
            {sections && sections.map((section)=>
            (
              <li class="pr-12 inline-block">
                <a href={section.href} class="text-custom-white text-xl hover:text-[#02F67C]">{section.label}</a>
              </li>
            ))}
            </ul>
          </div>
          <div class="flex items-center gap-4">
            <ul>
              <li><a href=""class="px-4 py-2 border-[transparent] text-[18px] text-[#58f3a6] hover:text-white rounded-full cursor-pointer border-1 md:hover:(border-[#2FD180] border-1 rounded-full) focus:outline-none">Login</a></li>
            </ul>
            <Button variant="signup">Cadastrar-se</Button>
          </div>         
        </ul>
      </nav>
          <div class="absolute bg-gradient-to-r from-green-400 to-black h-1 w-1/2 bottom-0 left-0"></div>
    </header>
    </div>
  );
}
