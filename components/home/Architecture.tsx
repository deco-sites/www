import BottomTriangle from "../ui/BottomTriangle.tsx";
import BiggerLineIcon from "../ui/icons/BiggerLineIcon.tsx";
import type { h } from "preact";
import ContentTitle from "../ui/ContentTitle.tsx";
import { t } from "$deco/i18n/runtime.ts";

interface ArchitectureContentWrapperProps {
  paragraphContent: string;
}

function ArchitectureContentWrapper(
  { paragraphContent }: ArchitectureContentWrapperProps,
) {
  return (
    <p class={`pb-8`}>
      {paragraphContent}
    </p>
  );
}

export default function Architecture() {
  return (
    <div class="bg-primary-light text-black relative overflow-hidden flex -mt-4">
      {/* triangle */}
      <div
        class={`absolute bottom-0 w-full h-24 bg-[#174B4F]`}
        style="clip-path: polygon(0 25%, 100% 80%, 100% 100%, 0% 100%); margin-bottom: -1px"
      />
      {/* fim: triangle */}

      <section
        id="architecture"
        class="container mx-auto px-4 pt-20 pb-16 md:py-28 flex justify-between items-center flex-col xl:flex-row"
      >
        <div class="md:pt-10 xl:pl-20 text-secondary-dark">
          <ContentTitle
            title={t("landing.architecture.title1")}
            titleClass="text-secondary-dark md:text-[64px] md:leading-[77px] md:w-[84%] lg:w-[75%] xl:w-6/12 pb-5 md:pb-5 text-[36px] text-left md:text-center xl:text-left xl:m-0"
            highlight={t("landing.architecture.title2")}
            hightlightClass="text-primary"
            titleContinuation={t("landing.architecture.title3")}
          />

          <div class="flex flex-col-reverse xl:flex-row w-11/12 xl:px-0 md:pt-14 xl:py-10 md:w-full m-auto">
            <div class="flex xl:w-1/2">
              <div class="px-8 hidden xl:block">
                <BiggerLineIcon from="#2FD180" to="#2FD180" />
              </div>
              <div class="py-12 px-2.5 xl:px-0 md:p-20 font-light text-2xl">
                <ArchitectureContentWrapper
                  paragraphContent={t("landing.architecture.text1")}
                />
                <ArchitectureContentWrapper
                  paragraphContent={t("landing.architecture.text2")}
                />
                <ArchitectureContentWrapper
                  paragraphContent={t("landing.architecture.text3")}
                />
              </div>
            </div>
            <picture class="mx-auto xl:pt-14 xl:p-12">
              <source
                srcset="/images/architecture-mobile.webp"
                media="(max-width: 640px)"
                sizes="100vw"
              />
              <source
                srcset="/images/architecture.webp"
                media="(min-width: 641px)"
                sizes="100vw"
              />
              <img
                src="/images/architecture.webp"
                alt="Ilustração sobre a arquitetura"
                width="520"
                height="361"
              />
            </picture>
          </div>
        </div>
      </section>
    </div>
  );
}
