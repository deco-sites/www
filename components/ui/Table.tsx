import { ComponentChild } from "preact";

export function Table({ children }: { children: ComponentChild }) {
  return (
    <table class="w-full">
      {children}
    </table>
  );
}

export function TableBody({ children }: { children: ComponentChild }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }: { children: ComponentChild }) {
  return (
    <tr class="mb-4 items-center border-b border-primary-light dark:border-gray-700 border-opacity-50">
      {children}
    </tr>
  );
}
