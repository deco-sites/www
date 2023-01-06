import { useId } from "preact/hooks";
import { h } from "preact";

interface Props extends h.JSX.HTMLAttributes<HTMLInputElement> {
  label?: string;
}

/**
 * TODO: Tailwind CSS 3.0 has a much more ergonomic way of writting this component
 * with `peer` classes. When migrating to v3, rewrite this component
 *
 * https://flowbite.com/docs/forms/toggle/
 */
function Switch({ label, checked, ...rest }: Props) {
  const id = useId();

  return (
    <label
      for={id}
      class="flex cursor-pointer select-none items-center"
      aria-label={label}
    >
      <div class="relative">
        <input
          id={id}
          type="checkbox"
          class="sr-only"
          checked={checked}
          {...rest}
        />
        <div
          class={`block h-4 w-7 rounded-full dark:bg-deco-dark-gray bg-deco-light-gray transition ${
            checked ? "dark:bg-primary-green-dark bg-primary-green-light" : ""
          }`}
        />
        <div
          class={`dot absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white transition ${
            checked ? "translate-x-full" : ""
          }`}
        />
      </div>
      {label && (
        <div class="ml-3 text-sm font-medium leading-4">
          {label}
        </div>
      )}
    </label>
  );
}

export default Switch;
