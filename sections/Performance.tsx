import BiggerLineIcon from "$deco/components/ui/icons/BiggerLineIcon.tsx";
import ContentWrapper from "$deco/components/ui/ContentWrapper.tsx";
import BottomTriangle from "$deco/components/ui/BottomTriangle.tsx";
import ContentTitle from "$deco/components/ui/ContentTitle.tsx";
import ContentSubtitle from "$deco/components/ui/ContentSubtitle.tsx";
import TargetAudienceContentWrapper from "$deco/components/ui/TargetAudienceContentWrapper.tsx";

export interface Props {
  customersLabel: string;
  obssesion: string;
  highlight: string;
  subTitle1: string;
  subTitle2: string;
  contentTitle1: string;
  contentText1: string;
  contentTitle2: string;
  contentText2: string;
  contentTitle3: string;
  contentText3: string;
}

export default function Performance(
  {
    customersLabel,
    obssesion,
    highlight,
    subTitle1,
    subTitle2,
    contentTitle1,
    contentText1,
    contentTitle2,
    contentText2,
    contentTitle3,
    contentText3,
  }: Props,
) {
  return (
    <div class="bg-radial from-[#DAFAEE] to-white text-black relative overflow-hidden -mt-4">
      <BottomTriangle class="bg-primary-light" />
      <section
        id="performance"
        class="max-w-[1536px] container mx-auto px-4 pt-14 md:pt-20 pb-16"
      >
        <TargetAudienceContentWrapper
          from="#2FD180"
          to="#2FD180"
          number="3"
          numberClass="bg-gradient-to-br from-primary to-[#5CDFA0] px-4 py-2.5 text-white"
          targetAudienceTextContent={customersLabel}
          targetAudienceClass="bg-gradient-to-br from-primary to-[#5CDFA0] text-transparent bg-clip-text"
        />

        <ContentTitle
          title={obssesion}
          titleClass="text-secondary-dark md:text-[64px] md:leading-[77px]"
          highlight={highlight}
          hightlightClass="text-primary"
          titleContinuation=""
        />

        <ContentSubtitle
          title={subTitle1}
          titleContinuation={subTitle2}
        />

        <div class="flex flex-col xl:flex-row justify-between items-center p-2.5 xl:p-20 md:w-full m-auto">
          <picture class="w-9/12 pt-10 xl:pr-5 xl:w-6/12">
            <source
              srcset="/images/performance-mobile.webp"
              media="(max-width: 640px)"
              sizes="100vw"
            />
            <source
              srcset="/images/performance.webp"
              media="(min-width: 641px)"
              sizes="100vw"
            />
            <img
              src="/images/performance.webp"
              alt="Ilustração sobre performance"
              class="m-auto"
              width="463"
              height="376"
            />
          </picture>

          <div class="hidden xl:block">
            <BiggerLineIcon from="#2FD180" to="#2FD180" />
          </div>

          <div class="pb-12 flex flex-col md:p-20 xl:p-0 xl:w-1/2 md:pt-12 xl:pt-0 xl:pl-16 text-secondary-dark">
            <ContentWrapper
              title={contentTitle1}
              titleClass="md:text-2xl"
              content={contentText1}
              contentClass="md:text-xl"
              contentWrapperClass="pt-10 md:pt-0"
            />
            <ContentWrapper
              title={contentTitle2}
              titleClass="md:text-2xl"
              content={contentText2}
              contentClass="md:text-xl"
            />
            <ContentWrapper
              title={contentTitle3}
              titleClass="md:text-2xl"
              content={contentText3}
              contentClass="md:text-xl"
              contentWrapperClass="md:pb-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
