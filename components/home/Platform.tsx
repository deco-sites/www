import BiggerLineIcon from "../ui/icons/BiggerLineIcon.tsx";
import ContentWrapper from "../ui/ContentWrapper.tsx";
import BottomTriangle from "../ui/BottomTriangle.tsx";
import ContentTitle from "../ui/ContentTitle.tsx";
import TargetAudienceContentWrapper from "../ui/TargetAudienceContentWrapper.tsx";
import { t } from "$deco/i18n/runtime.ts";

export default function Platform() {
  return (
    <div class="w-full bg-gradient-to-b from-[#003232] to-[#0A4E4E] relative overflow-hidden -mt-4">
      <BottomTriangle class="bg-primary" />
      <section
        id="platform"
        class="container max-w-[1536px] mx-auto px-4 pt-20 pb-14 md:pt-44 max-w-7xl"
      >
        <ContentTitle
          title={t("landing.platform.title")}
          titleClass="text-white text-center md:text-8xl lg:text-7xl xl:text-8xl md:leading-[96px] md:w-full"
          highlight={t("landing.platform.highlight")}
          titleContinuation=""
          hightlightClass="block text-primary"
        />
      </section>

      <section class=" max-w-[1536px] container px-4 mx-auto pb-16">
        <TargetAudienceContentWrapper
          from="#ffffff"
          to="#ffffff"
          number="1"
          numberClass="from-white to-primary-light px-4 py-1.5 text-black"
          targetAudienceTextContent={t("landing.platform.forDevs")}
          targetAudienceClass="pb-5 py-4 text-white"
        />

        <div class="flex flex-col xl:flex-row justify-between items-center p-2.5 md:p-20 md:w-full m-auto">
          <picture class="w-full pt-10 xl:pt-0 xl:pr-5 xl:w-1/2">
            <source
              srcset="/images/code-mobile.webp"
              media="(max-width: 640px)"
              sizes="100vw"
            />
            <source
              srcset="/images/code.webp"
              media="(min-width: 641px)"
              sizes="100vw"
            />
            <img
              src="/images/code.webp"
              alt="Ilustrações referenciando o Deno, Fresh, Twind e Preact"
              width="588"
              height="432"
              class="m-auto"
            />
          </picture>

          <div class="hidden xl:block">
            <BiggerLineIcon from="#ffffff" to="#ffffff" />
          </div>

          <div class="py-12 flex-col xl:w-1/2 xl:pt-0 xl:pb-0 xl:pl-16">
            <ContentWrapper
              title={t("landing.platform.contentTitle1")}
              titleClass="md:text-3xl text-white"
              content={t("landing.platform.contentText1")}
              contentClass="text-primary-light"
              contentWrapperClass="pt-10 md:pt-0 hidden md:block"
            />
            <ContentWrapper
              title={t("landing.platform.contentTitle2")}
              titleClass="text-white"
              content={t("landing.platform.contentText2")}
              contentClass="text-primary-light"
              contentWrapperClass="md:hidden"
            />
            <ContentWrapper
              title={t("landing.platform.contentTitle3")}
              titleClass="md:text-3xl text-white"
              content={t("landing.platform.contentText3")}
              contentClass="text-primary-light"
              contentWrapperClass="hidden md:block"
            />
            <ContentWrapper
              title={t("landing.platform.contentTitle4")}
              titleClass="md:text-3xl text-white"
              content={t("landing.platform.contentText4")}
              contentClass="text-primary-light"
              contentWrapperClass="md:hidden"
            />
            <ContentWrapper
              title={t("landing.platform.contentTitle5")}
              titleClass="md:text-3xl text-white"
              content={t("landing.platform.contentText5")}
              contentClass="text-primary-light"
              contentWrapperClass="hidden md:block"
            />
            <ContentWrapper
              title={t("landing.platform.contentTitle6")}
              titleClass="md:text-3xl text-white"
              content={t("landing.platform.contentText6")}
              contentClass="text-primary-light"
              contentWrapperClass="md:hidden"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
