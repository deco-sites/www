import { h } from "preact";
import GitHubIcon from "$deco/components/ui/icons/GitHubIcon.tsx";
import LinkedInIcon from "$deco/components/ui/icons/LinkedInIcon.tsx";
import LogoDeco from "$deco/components/ui/icons/LogoDeco.tsx";
import DiscordIcon from "../components/ui/icons/DiscordIcon.tsx";

export interface Item{
  label: string;
  href: string;
}
export interface Section{
  label: string;
  href: string;
  subList: Item[];
}

export interface Props {
  copyright: string;
   sections: Section[];
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

export default function BlogFooter({ copyright, sections =[],  }: Props) {
  return (
    <footer class="bg-black w-full">
      <div class="pb-12 mx-auto">
        <nav class="max-w-[1536px] mx-auto px-0 md:px-10 py-8 text-white text-sm" aria-label="Deco Menu">
          <ul role="menubar" aria-label="Deco Menu" class="flex flex-col md:flex-row md:justify-between p-4 relative">
            <li role="none" class="h-8 mb-2">
              <div class="mb-2">
                <NavAnchor aria-label="Logo da Deco na cor branca" href="#" class="pb-4">
                  <LogoDeco color="#2FD180" class="h-8" />
                </NavAnchor>
              </div>
                <small class="text-[14px] mt-4">{copyright}</small>
            </li>
            <li class="">
              <div class="flex flex-col mt-4 md:mt-0 gap-2 md:flex-row ">
                {sections && sections.map((section)=>(
                  <div key={section.label} class="md:mx-16">
                    <h4 class="hidden md:block mb-4"><a href={section.href} class="text-[18px] font-bold">{section.label}</a></h4>
                      <ol class="mt-2 md:mt-0">
                      {section.subList && section.subList.map((item) =>(
                        <li class="mb-1">
                          <a href={item.href} class="inline-block group">
                            <div class="mb-[6px] text-white text-[16px]">{item.label}</div>
                            <div class="h-[2px] bg-white w-0 group-hover:w-full duration-500">
                            </div>
                          </a>
                        </li>
                      ))}
                      </ol>
                  </div>
                ))
                  }
              </div>
            </li>
            <div class="flex mt-2 md:mt-0">
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
            </div>
          </ul>
        </nav>
      </div>
      <div class="relative overflow-hidden">
        <div class="block w-[300px] md:w-full z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[320%] md:w-full"
            viewBox="0 0 1440 311"
            fill="none"
          >
            <g filter="url(#filter0_dd_732_1051)">
              <path
                d="M1278.2 442.751C1219.5 442.751 1209.45 388.69 1227.99 336.052C1242.66 294.235 1277.42 250.272 1329.17 250.272C1390.2 250.272 1396.37 307.948 1378.6 358.417C1363.16 401.679 1328.4 442.751 1278.2 442.751ZM1260.43 519.878C1362.38 519.878 1453.54 467.263 1489.83 372.086C1527.68 271.871 1485.2 171.677 1346.17 171.677C1234.94 171.677 1149.98 236.56 1117.54 322.34C1081.24 418.94 1120.64 519.857 1260.43 519.857V519.878ZM922.109 519.878C962.266 519.878 1003.22 511.949 1031.78 500.405C1041.83 474.448 1042.6 449.213 1034.88 424C1014.79 431.207 987.004 438.414 958.417 438.414C881.177 438.414 874.23 385.075 890.448 339.644C908.215 291.344 954.568 252.419 1027.94 252.419C1047.25 252.419 1065.79 255.31 1077.36 261.794C1097.45 236.56 1109.02 211.325 1111.35 185.39C1094.36 178.183 1065.77 171.699 1028.71 171.699C908.215 171.699 813.208 237.304 779.224 328.144C746.788 413.924 771.502 519.9 922.109 519.9V519.878ZM507.324 312.986C528.188 269.724 560.624 244.511 603.105 244.511C640.962 244.511 647.134 263.985 640.962 279.121C631.691 300.018 600.03 313.008 507.347 313.008L507.324 312.986ZM540.534 519.878C579.916 519.878 635.54 512.672 681.894 491.052C689.615 467.263 688.841 443.474 680.345 418.962C650.984 432.653 610.052 440.583 572.969 440.583C518.12 440.583 488.008 424 488.782 382.184C638.638 385.798 716.653 360.564 742.141 298.551C767.63 235.837 723.6 171.677 619.323 171.677C508.098 171.677 426.211 245.935 396.099 325.954C364.438 411.011 384.505 519.878 540.534 519.878ZM92.7961 519.878C195.524 519.878 253.965 475.893 321.934 341.09C359.017 266.832 390.678 194.02 426.986 121.931L470.241 134.899C481.835 138.513 488.008 132.007 482.61 121.931L430.107 21.7377C426.235 14.531 417.739 13.8081 412.34 15.9767L281.8 62.1086C270.98 65.7229 271.755 75.0763 282.575 77.9678L321.206 89.5117C289.545 156.563 250.139 257.479 218.478 320.916C182.944 391.559 165.178 441.305 104.93 441.305C44.6826 441.305 34.6374 397.32 60.1258 334.606C89.4868 261.794 138.915 240.174 195.29 255.31C210.733 235.136 222.327 204.841 226.951 177.46C210.733 173.145 191.417 171.699 175.199 171.699C84.0652 171.699 -6.31778 215.684 -43.4004 307.948C-91.2792 426.892 -47.0148 519.9 92.7961 519.9V519.878Z"
                fill="white"
                fill-opacity="0.01"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_732_1051"
                x="-70"
                y="0.900391"
                width="1581"
                height="531"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_732_1051"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-6" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_732_1051"
                  result="effect2_dropShadow_732_1051"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_732_1051"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  );
}
