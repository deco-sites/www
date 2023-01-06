import { JSX } from "preact";
import { forwardRef } from "preact/compat";

export const variants = {
  "hero-large": "font-hero-large text-hero-large",
  "hero-medium": "font-hero-medium text-hero-medium",
  "hero-small": "font-hero-small text-hero-small",
  "display": "font-display text-display",
  "heading": "font-heading text-heading",
  "title": "font-title text-title",
  "body-strong": "font-body-strong text-body-strong",
  "body-regular": "font-body-regular text-body-regular",
  "caption-strong": "font-caption-strong text-caption-strong",
  "caption-regular": "font-caption-regular text-caption-regular",
};

const tones = {
  "default": "text-default",
  "subdued": "text-subdued",
  "hovered": "text-hovered",
  "disabled": "text-disabled",
  "critical": "text-critical",
  "warning": "text-warning",
  "positive": "text-positive",
  "hightlight": "text-hightlight",
  "interactive-default": "text-interactive-default",
  "interactive-hovered": "text-interactive-hovered",
};

type Props = JSX.IntrinsicElements["span"] & {
  tone?: keyof typeof tones;
  variant?: keyof typeof variants;
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { tone = "default", variant = "body-regular", ...props },
  ref,
) => {
  const _tone = tones[tone];
  const _variant = variants[variant];

  return (
    <span
      {...props}
      class={`${_tone} ${_variant}`}
      ref={ref}
    />
  );
});

export default Text;
