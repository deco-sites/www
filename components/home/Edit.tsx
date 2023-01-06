import BiggerLineIcon from "../ui/icons/BiggerLineIcon.tsx";
import ContentWrapper from "../ui/ContentWrapper.tsx";
import BottomTriangle from "../ui/BottomTriangle.tsx";
import ContentTitle from "../ui/ContentTitle.tsx";
import TargetAudienceContentWrapper from "../ui/TargetAudienceContentWrapper.tsx";
import { t } from "$deco/i18n/runtime.ts";

export default function Edit() {
  return (
    <div class="bg-gradient-to-t from-[#4DE499] to-primary relative overflow-hidden -mt-4">
      <BottomTriangle class="bg-white" />

      <section
        id="autonomy"
        class="container max-w-[1536px] mx-auto px-4 pt-14 md:pt-20 pb-16"
      >
        <TargetAudienceContentWrapper
          from="#113032"
          to="#113032"
          number="2"
          numberClass="from-secondary-dark to-[#1B674C] px-4 py-2.5 text-white "
          targetAudienceTextContent={t("landing.edit.targetText")}
          targetAudienceClass="bg-gradient-to-br from-secondary-dark to-[#1F7D57] text-transparent bg-clip-text"
        />

        <ContentTitle
          title={t("landing.edit.contentTitle1")}
          titleClass="text-white md:text-[64px] md:leading-[77px]"
          highlight={t("landing.edit.contentHighlight1")}
          hightlightClass="text-secondary-dark"
          titleContinuation=""
        />

        <div class="flex flex-col xl:flex-row justify-between items-center p-2.5 md:p-20 md:w-full m-auto">
          <picture class="w-full pt-14 lg:pt-6 xl:pt-0 xl:pr-5 xl:w-1/2">
            <source
              srcset="/images/edit-mobile.webp"
              media="(max-width: 640px)"
              sizes="100vw"
            />
            <source
              srcset="/images/edit.webp"
              media="(min-width: 641px)"
              sizes="100vw"
            />
            <img
              src="/images/edit.webp"
              alt="Ilustrações referenciando o CMS"
              width="588"
              height="432"
              class="m-auto"
            />
          </picture>

          <div class="hidden xl:block">
            <BiggerLineIcon from="#ffffff" to="#ffffff" />
          </div>
          <div class="pb-12 xl:pt-12 flex-col xl:w-1/2 xl:pb-0 xl:pl-16 text-secondary-dark">
            <ContentWrapper
              title={t("landing.edit.title1")}
              titleClass="md:text-3xl"
              content={t("landing.edit.contentText1")}
              contentWrapperClass="pt-10"
            />
            <ContentWrapper
              title={t("landing.edit.title2")}
              titleClass="md:text-3xl"
              content={t("landing.edit.contentText2")}
              contentWrapperClass="hidden md:block"
            />
            <ContentWrapper
              title={t("landing.edit.title2.1")}
              titleClass="md:text-3xl"
              content={t("landing.edit.contentText2")}
              contentWrapperClass="md:hidden"
            />
            <ContentWrapper
              title={t("landing.edit.title3")}
              titleClass="md:text-3xl"
              content={t("landing.edit.contentText3")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
