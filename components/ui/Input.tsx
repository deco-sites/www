import { JSX } from "preact";
import { forwardRef } from "preact/compat";

const variants = {
  primary: "focus:outline-deco-green-light dark:bg-deco-darker-gray",
  danger: "bg-primary-red-light bg-opacity-20 focus:outline-deco-red-light",
};

const fits = {
  container: "w-full",
  content: "w-min",
};

type Props = JSX.IntrinsicElements["input"] & {
  variant?: keyof typeof variants;
  fit?: keyof typeof fits;
};

const Input = forwardRef<HTMLInputElement, Props>((
  { variant = "primary", fit = "content", ...props },
  ref,
) => {
  const _variant = variants[variant];
  const _fit = fits[fit];

  return (
    <input
      {...props}
      class={`${_fit} ${_variant} rounded border border-gray-300 text-sm p-2 disabled:text-gray-400 ${props.class}`}
      ref={ref}
    />
  );
});

export default Input;
