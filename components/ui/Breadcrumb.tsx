type Item = {
  label: string;
  href: string;
};

type Props = {
  as: "a";
  items: Item[];
} | {
  as?: "span";
  items: (Omit<Item, "href"> & { href?: undefined })[];
};

export default function Breadcrumb({ items, as: Component = "span" }: Props) {
  return (
    <div class="flex items-center gap-1">
      {items.map(({ label, href }, index) => (
        <Component
          href={href}
          class="font-medium text-base leading-5 text-deco-dark-gray tracking-[-0.04em] last-child:text-deco-black flex items-center gap-1"
        >
          {label}
          {index !== items.length - 1 ? <span>/</span> : ""}
        </Component>
      ))}
    </div>
  );
}
