interface ContentSubtitleProps {
  title: string;
  titleContinuation: string;
}
export default function ContentSubtitle(
  {
    title,
    titleContinuation,
  }: ContentSubtitleProps,
) {
  return (
    <p class={`text-xl text-center pt-5 md:text-2xl`}>
      {title}
      <br class={`hidden md:flex`} />
      {titleContinuation}
    </p>
  );
}
