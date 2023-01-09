import BiggerLineIcon from "$deco/components/ui/icons/BiggerLineIcon.tsx";
import ContentWrapper from "$deco/components/ui/ContentWrapper.tsx";
import BottomTriangle from "$deco/components/ui/BottomTriangle.tsx";
import ContentTitle from "$deco/components/ui/ContentTitle.tsx";
import TargetAudienceContentWrapper from "$deco/components/ui/TargetAudienceContentWrapper.tsx";

export interface Props {
  targetText: string;
  title: string;
  highlight: string;
  sections: Array<{ title: string; text: string }>;
}

export default function Edit({
  highlight,
  title,
  sections,
  targetText,
}: Props) {
  const [content1, content2, content3] = sections || [];
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
          targetAudienceTextContent={targetText}
          targetAudienceClass="bg-gradient-to-br from-secondary-dark to-[#1F7D57] text-transparent bg-clip-text"
        />

        <ContentTitle
          title={title}
          titleClass="text-white md:text-[64px] md:leading-[77px]"
          highlight={highlight}
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
              title={content1?.title}
              titleClass="md:text-3xl"
              content={content1?.text}
              contentWrapperClass="pt-10"
            />
            <ContentWrapper
              title={content2?.title}
              titleClass="md:text-3xl"
              content={content2?.text}
              contentWrapperClass="hidden md:block"
            />
            <ContentWrapper
              title={content2?.title}
              titleClass="md:text-3xl"
              content={content2?.text}
              contentWrapperClass="md:hidden"
            />
            <ContentWrapper
              title={content3?.title}
              titleClass="md:text-3xl"
              content={content3?.text}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
