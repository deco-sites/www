import { useState } from "preact/hooks";
import LogoDeco from "../components/ui/icons/LogoDeco.tsx";
import GitHubIcon from "$deco/components/ui/icons/GitHubIcon.tsx";
import LinkedInIcon from "$deco/components/ui/icons/LinkedInIcon.tsx";
import DiscordIcon from "../components/ui/icons/DiscordIcon.tsx";
import Button from "../components/ui/Button.tsx";
import Switcher from "../islands/ChangeUser.tsx";
import { h } from "preact";

export interface Item {
    label: string;
    href: string;
}
export interface Props {
    sections: Item[];
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

function TesteIsland({sections}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <header class="">
      <nav class={`bg-gray-800`}>
        <div class="flex justify-between items-center h-16 px-4">
          <div class="flex items-center">
            <LogoDeco color="#2FD180" class="h-8" />
            {isModalOpen ? (
              <div class="hidden">
                <Switcher/>
              </div>
            ):(
            <div class="block">
                <Switcher/>
              </div>
            )
            }
          </div>
          <div class="md:hidden lg:block lg:mr-[60px]">
              <ul class="hidden md:flex flex-wrap items-center justify-center list-none mr-auto space-x-4">
              {sections && sections.map((section)=>
              (
                <li class="pr-8 inline-block">
                  <a href={section.href} class="text-custom-white text-sm hover:text-[#02F67C]">{section.label}</a>
                </li>
              ))}
              </ul>
          </div>
          <div class="hidden lg:flex items-center space-x-4">
            <ul class="flex">
                <li>
                  <a
                    href="#"
                    class="block md:hover:(border-[#02F67C] border-1 text-[#fff]) border-[transparent] border-1  font-normal text-[16px] text-[#06E474] px-3 md:py-1 rounded-full md:transition md:ease-in-out md:duration-300"
                  >
                  Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block md:hover:(bg-[#0A2121] border-1 text-[#fff]) border-[#02F67C] border-1  bg-[#02F67C] font-normal text-[16px] text-[#0A2121] px-3 md:py-1 rounded-full md:transition md:ease-in-out md:duration-300"
                  >
                  Cadastrar-se
                  </a>
                </li>
            </ul>
          </div>
          <div class="block lg:hidden">
            {isModalOpen ? (
               <svg width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleModal} class="cursor-pointer">
                <rect width="48" height="48" fill="none" fill-opacity="0.01"/>
                <path d="M14 14L34 34" stroke="#06E474" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 34L34 14" stroke="#06E474" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            ) : (
              <svg
                width="35"
                height="32"
                viewBox="0 0 39 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleModal}
                class="cursor-pointer"
              >
                <rect
                  x="19"
                  y="2"
                  width="17"
                  height="4"
                  rx="2"
                  fill="#06E474"
                />
                <rect
                  x="11"
                  y="14"
                  width="25"
                  height="4"
                  rx="2"
                  fill="#06E474"
                />
                <rect
                  x="3"
                  y="26"
                  width="33"
                  height="4"
                  rx="2"
                  fill="#06E474"
                />
              </svg>
            )}
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <div class="fixed w-full bg-gray-800 bg-opacity-1 z-50 h-full" onClick={toggleModal}>
          <div class="flex flex-col gap-[180px]">
            <div>
                <ul class="flex flex-col list-none space-y-4">
                {sections && sections.map((section)=>
                (
                  <li class="inline-block">
                    <a href={section.href} class="text-[#fff] text-[16px] pl-4 font-thin">{section.label}</a>
                    <div class="w-full h-[1px] bg-[#c0c0c0a4]"></div>
                  </li>
                ))}
                </ul>
            </div>
            <div class="flex flex-col gap-2">
               <a href="#" class="hover:(border-[#02F67C] border-1 text-[#fff]) border-[transparent] border-1  font-normal text-[16px] text-[#06E474] md:transition md:ease-in-out md:duration-300">Login</a>
               <a href="#" class="hover:(border-[#02F67C] border-1 text-[#fff]) border-[transparent] border-1  font-normal text-[16px] text-[#06E474] md:transition md:ease-in-out md:duration-300">Cadastrar-se</a>
            </div>
            <div class="mx-auto">
              <ul class="flex">
                <li role="none" class="pr-2">
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
                
                <li role="none" class="px-2">
                  <NavAnchor
                    href="https://www.deco.cx/pt"
                    target="_blank"
                    aria-label="Link para o canal do discord da Deco"
                  >
                    <div class="w-full h-8 lg:h-auto">
                      <DiscordIcon/>
                    </div>
                  </NavAnchor>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
export default TesteIsland