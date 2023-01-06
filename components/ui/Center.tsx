import { ComponentChild } from "preact";

interface Props {
  variant?: "full" | "default";
  children: ComponentChild;
}

const variants = {
  full: "h-full w-full",
  default: "",
};

function Center({ children, variant = "default" }: Props) {
  return (
    <div class={`flex justify-center items-center ${variants[variant]}`}>
      {children}
    </div>
  );
}

export default Center;
