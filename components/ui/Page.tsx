import { h } from "preact";

interface Props {
  title: string | h.JSX.Element;
  controls?: h.JSX.Element | h.JSX.Element;
  actions?: h.JSX.Element | h.JSX.Element;
  children?: h.JSX.Element;
}

function Page({ title, controls, actions, children }: Props) {
  return (
    <div class="pb-3 h-full flex flex-col">
      <header class="pt-6 border-b border-primary-light dark:border-gray-700 border-opacity-50 mb-4 flex">
        <div class="flex-auto">
          <h2 class="ml-6 mb-2 font-medium">{title}</h2>
          <div class="ml-2">
            {controls}
          </div>
        </div>
        <div class="flex-none mr-6">
          {actions}
        </div>
      </header>

      <div class="flex-grow">
        {children}
      </div>
    </div>
  );
}

export default Page;
