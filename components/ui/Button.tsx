import { forwardRef } from "preact/compat";

import type { ComponentType, JSX } from "preact";

import Spinner from "./Spinner.tsx";

type Props =
  & Omit<JSX.IntrinsicElements["button"], "as" | "size" | "loading">
  & {
    as?: keyof JSX.IntrinsicElements | ComponentType;
    size?: keyof typeof sizes;
    variant?: keyof typeof variants;
    fit?: keyof typeof fits;
    loading?: boolean;
  };

const variants = {
  primary:
    "text-white bg-deco-medium-green dark:text-white focus:outline-deco-green-light",
  secondary:
    "text-deco-black bg-deco-light-gray dark:text-black focus:outline-deco-green-light",
  tertiary:
    "text-deco-black bg-transparent dark:text-white focus:outline-deco-green-light",
  danger:
    "text-white bg-deco-brand-red dark:text-white focus:outline-deco-red-light",
};

const sizes = {
  extraSmall: "font-medium text-xs px-2 py-1 h-6",
  small: "font-medium text-sm px-3 py-2 h-9",
  large: "font-medium text-lg px-4 py-3 h-12",
};

const fits = {
  container: "w-full",
  content: "",
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = "primary",
  size = "small",
  fit = "content",
  as = "button",
  class: _class,
  children,
  loading,
  ...props
}, ref) => {
  const Component = as as ComponentType;
  const _size = sizes[size];
  const _variant = variants[variant];
  const _fit = fits[fit];

  return (
    <Component
      className={`inline-flex items-center justify-center rounded cursor-pointer ${
        sizes[size]
      } ${variants[variant]} ${
        fits[fit]
      } ${_class} flex items-center justify-center cursor-pointer rounded transition-colors duration-150 ease-in hover:bg-opacity-80 disabled:bg-gray-400 disabled:text-deco-dark-gray disabled:cursor-not-allowed focus:outline-none`}
      {...props}
      ref={ref}
    >
      {loading === true ? <Spinner /> : children}
    </Component>
  );
});

export default Button;
