interface Props {
  imgSrc: string;
  classVtex: string;
  altText: string;
  name: string;
  role: string;
  class: string;
  linkedin: string;
  ariaLabel: string;
}

export default function TeamMember(
  {
    name,
    role,
    imgSrc,
    altText,
    class: className,
    classVtex: classVTEX,
    linkedin,
    ariaLabel,
  }: Props,
) {
  return (
    <div
      class={`w-[172px] h-[219px] rounded-[20px] bg-white shadow-md py-5 relative flex-shrink-0 ${className}`}
    >
      <a href={linkedin} aria-label={ariaLabel} target="_blank">
        <img
          src="/images/linkedinFlag.png"
          alt="Flag do LinkedIn"
          class={`absolute top-[8.7rem] right-[4.813rem] z-10 bg-white`}
          loading="lazy"
        />
        <img
          src={imgSrc}
          alt={altText}
          width="130"
          height="130"
          class="mx-auto rounded-full"
          loading="lazy"
        />
        <h2 class={`pt-2.5 text-sm font-bold text-center`}>
          {name}
        </h2>
        <span
          class={`pt-2.5 text-xs text-[#57565C] text-center block mx-auto`}
        >
          {role}
        </span>
      </a>
    </div>
  );
}
