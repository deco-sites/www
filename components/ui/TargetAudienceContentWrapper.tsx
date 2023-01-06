import LineIcon from "../ui/icons/LineIcon.tsx";

interface Props {
  from: string;
  to: string;
  targetAudienceTextContent: string;
  targetAudienceClass: string;
  number: string;
  numberClass: string;
}

export default function TargetAudienceContentWrapper(
  {
    from,
    to,
    targetAudienceTextContent,
    targetAudienceClass: targetAudienceClassName,
    number,
    numberClass: numberClassName,
  }: Props,
) {
  return (
    <div class={`flex flex-col items-center justify-between`}>
      <LineIcon from={from} to={to} />
      <span
        class={`m-auto bg-gradient-to-br rounded-full text-4xl font-semibold leading-[91.5%] ${numberClassName}`}
      >
        {number}
      </span>
      <span
        class={`text-2xl md:text-3xl pb-5 block py-4 font-semibold text-center m-auto ${targetAudienceClassName}`}
      >
        {targetAudienceTextContent}
      </span>
    </div>
  );
}
