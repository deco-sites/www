import type { h } from "preact";
import ContentTitle from "$deco/components/ui/ContentTitle.tsx";
import { t } from "$deco/i18n/runtime.ts";

export interface Props {
  title: string;
  highlight: string;
  nameLabel: string;
  emailLabel: string;
  positionLabel: string;
  linkedinLabel: string;
  schedule: string;
}

interface InputProps extends h.JSX.HTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, class: className = "", ...inputProps }: InputProps) {
  return (
    <>
      <label class="text-sm text-black lg:w-[26.563rem] lg:mx-auto">
        {label} {inputProps.required && <span class="text-red-600">*</span>}
      </label>

      <input
        type="text"
        {...(inputProps as any)}
        class={`w-full lg:w-[26.563rem] h-12 p-3.5 text-sm text-black mb-4 rounded-md xl:mx-auto ${className}`}
      />
    </>
  );
}

export default function Newsletter({
  title,
  highlight,
  nameLabel,
  positionLabel,
  emailLabel,
  linkedinLabel,
  schedule,
}: Props) {
  return (
    <div class="relative overflow-hidden text-black bg-primary -mt-4">
      <section
        id="scheduleDemo"
        class="max-w-[1536px] container w-full flex flex-col justify-evenly lg:flex-row  mx-auto px-4 py-28 md:pt-0 items-center"
      >
        <div class="flex-col md:mx-auto md:w-10/12 lg:w-1/2 md:pt-10 lg:pt-0 lg:pl-20 lg:pl-0 text-secondary-dark">
          <ContentTitle
            title={title}
            titleClass="text-primary-dark md:text-[64px] md:leading-[77px] md:w-full lg:w-11/12 xl:w-[96%] mx-auto pb-5 md:pb-10 mb-10 md:pt-16 lg:pt-0 lg:pb-16 md:m-auto text-left"
            highlight={highlight}
            hightlightClass="text-white"
            titleContinuation=""
          />
        </div>
        <div class="w-full md:w-[80%] md:m-auto lg:w-auto">
          <form method="POST" class="flex flex-col p-2.5 md:pt-8 mx-auto" action="/api/leads">
            <input
              type="hidden"
              name="returnUrl"
              value={window?.location?.href}
            />
            <Input
              label={nameLabel}
              id="name"
              name="userName"
              placeholder="Ex: Maria das Graças"
              required
            />
            <Input
              label={emailLabel}
              id="email"
              name="userEmail"
              placeholder="Ex: maria@empresa.com.br"
              type="email"
              required
            />
            <Input
              label={positionLabel}
              id="role"
              name="userRole"
              placeholder={t("admin.placeHolder.positon")}
            />
            <Input
              label={linkedinLabel}
              id="linkedin"
              name="userLinkedin"
              placeholder="Ex: https://www.linkedin.com/in/maria"
              type="url"
              required
            />
            <input
              class="w-[50%] h-14 bg-gradient-to-r from-secondary-dark to-[#1B674C] rounded-xl mt-10 py-2.5 px-3.5 text-xl text-white cursor-pointer m-auto hover:shadow-lg hover:border-primary-light hover:border-1"
              type="submit"
              value={schedule}
            />
          </form>
        </div>
      </section>
    </div>
  );
}
