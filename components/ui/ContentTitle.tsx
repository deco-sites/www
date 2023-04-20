interface ContentTitleProps {
  title: string;
  highlight: string;
  titleContinuation: string;
  titleClass: string;
  hightlightClass: string;
}
export default function ContentTitle(
  {
    title,
    highlight,
    titleContinuation,
    titleClass: titleClassName = "",
    hightlightClass: hightlightClassName = "",
  }: ContentTitleProps,
) {
  return (
    <h2
      class={`font-semibold text-[44px] text-center leading-[44px] xl:w-full m-auto w-11/12 tracking-tighter ${titleClassName}`}
    >
      {title}{" "}
      <span class={`${hightlightClassName}`}>
        <span class=""></span>
        {highlight}
        {" "}
      </span>
      {titleContinuation}
    </h2>
  );
}
