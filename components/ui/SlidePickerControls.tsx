import { h } from "preact";

interface Props {
  class: string;
  selected: boolean;
}

export default function SlidePickerControls(
  { class: className, selected, ...props }: h.JSX.HTMLAttributes<
    HTMLButtonElement
  >,
) {
  return (
    <button
      class={`clear-both mr-1.5 h-2.5 w-2.5 bg-white focus:bg-primary focus:outline-none rounded-full border-0 ${className} ${
        selected ? "bg-primary" : "bg-white"
      }`}
      aria-label="slide picker control"
      {...props}
    >
    </button>
  );
}
