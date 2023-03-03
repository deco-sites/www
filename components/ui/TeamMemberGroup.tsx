import TeamMember from "$deco/components/ui/TeamMember.tsx";
import { signal } from "@preact/signals";

export const slidePage = signal(0);
export const PAGE_SIZE = 6;
export function setSlidePage(slide: number) {
  slidePage.value = slide;
}

export const time = [
  {
    imgSrc: "/images/guilherme.webp",
    altText: "Guilherme Rodrigues, Co-founder da Deco",
    name: "Guilherme Rodrigues",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/guifromrio/",
    ariaLabel: "Guilherme Rodrigues, Co-founder da Deco",
  },
  {
    imgSrc: "/images/lucis.webp",
    altText: "Luciano Júnior, Co-founder da Deco",
    ariaLabel: "Luciano Júnior, Co-founder da Deco",
    name: "Luciano Júnior",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/lcnjnr/",
  },
  {
    imgSrc: "/images/rafael.webp",
    altText: "Rafael Crespo, Co-founder da Deco",
    ariaLabel: "Rafael Crespo, Co-founder da Deco",
    name: "Rafael Crespo",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/rafaelgcrespo/",
  },
  {
    imgSrc: "/images/augusto.webp",
    altText: "Augusto Barbosa, Designer da Deco",
    ariaLabel: "Augusto Barbosa, Designer da Deco",
    name: "Augusto Barbosa",
    role: "Designer",
    linkedin: "https://www.linkedin.com/in/augustocb/",
  },
  {
    imgSrc: "/images/gimenes.webp",
    altText: "Tiago Gimenes, Software Engineer da Deco",
    ariaLabel: "Tiago Gimenes, Software Engineer da Deco",
    name: "Tiago Gimenes",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/tlgimenes/",
  },
  {
    imgSrc: "/images/brasileiro.webp",
    altText: "Igor Brasileiro, Software Engineer da Deco",
    ariaLabel: "Igor Brasileiro, Software Engineer da Deco",
    name: "Igor Brasileiro",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/igorbrasileiro/",
  },
  {
    imgSrc: "/images/candeia.webp",
    altText: "Marcos Candeia, Software Engineer da Deco",
    ariaLabel: "Marcos Candeia, Software Engineer da Deco",
    name: "Marcos Candeia",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/marcos-candeia/",
  },
  {
    imgSrc: "/images/maria.webp",
    altText: "Maria Luiza, SWE Intern da Deco",
    ariaLabel: "Maria Luiza, SWE Intern da Deco",
    name: "Maria Luiza Aires",
    role: "SWE Intern",
    classVtex: "hidden",
    linkedin: "https://www.linkedin.com/in/marialuizafaires/",
  },
  {
    imgSrc: "/images/matheus.webp",
    altText: "Matheus Gaudêncio, da Deco",
    ariaLabel: "Matheus Gaudêncio, da Deco",
    name: "Matheus Gaudêncio",
    role: "Software Engineer",
    classVtex: "hidden",
    linkedin: "https://www.linkedin.com/in/matheusgaudencio/",
  },
  {
    imgSrc: "/images/muriel.webp",
    altText: "Muriel Dias, UX Designer da Deco",
    ariaLabel: "Muriel Dias, UX Designer da Deco",
    name: "Muriel Dias",
    role: "UX Designer",
    classVtex: "hidden",
    linkedin: "https://www.linkedin.com/in/murieldias/",
  },
  {
    imgSrc: "/images/bruno.webp",
    altText: "Bruno Kuntz",
    ariaLabel: "Bruno Kuntz",
    name: "Bruno Kuntz",
    role: "Finance/Marketplace",
    classVtex: "hidden",
    linkedin: "https://www.linkedin.com/in/brunokuntz/",
  },
];

function isVisible(index: number, page: number) {
  if (page + PAGE_SIZE >= time.length) {
    return (
      page - Math.abs(time.length - (page + PAGE_SIZE)) <= index &&
      index < time.length
    );
  }
  return page <= index && index < page + PAGE_SIZE;
}

export default function TeamMemberGroup() {
  return (
    <div id="group-1" class="flex gap-5 lg:grid grid-cols-3 lg:justify-center">
      {time.map((pessoa, index) => (
        <TeamMember
          classVtex=""
          class={isVisible(index, slidePage.value) ? "" : "lg:hidden"}
          {...pessoa}
        />
      ))}
    </div>
  );
}
