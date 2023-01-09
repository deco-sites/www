import BiggerLineIcon from "$deco/components/ui/icons/BiggerLineIcon.tsx";
import ContentWrapper from "$deco/components/ui/ContentWrapper.tsx";
import BottomTriangle from "$deco/components/ui/BottomTriangle.tsx";
import ContentTitle from "$deco/components/ui/ContentTitle.tsx";
import TargetAudienceContentWrapper from "$deco/components/ui/TargetAudienceContentWrapper.tsx";

export interface Props {
  title: string;
  titleHighlight: string;
  forDevs: string;
  sections: Array<{ title: string; text: string }>;
}

export default function Platform({
  title,
  titleHighlight,
  forDevs,
  sections,
}: Props) {
  const [content1, content2, content3, content4] = sections ?? [];
  return (
    <div class="w-full bg-gradient-to-b from-[#003232] to-[#0A4E4E] relative overflow-hidden -mt-4">
      <BottomTriangle class="bg-primary" />
      <section
        id="platform"
        class="container max-w-[1536px] mx-auto px-4 pt-20 pb-14 md:pt-44 max-w-7xl"
      >
        <ContentTitle
          title={title}
          titleClass="text-white text-center md:text-8xl lg:text-7xl xl:text-8xl md:leading-[96px] md:w-full"
          highlight={titleHighlight}
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
          targetAudienceTextContent={forDevs}
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
              title={content1?.title}
              titleClass="md:text-3xl text-white"
              content={content1?.text}
              contentClass="text-primary-light"
              contentWrapperClass="pt-10 md:pt-0 hidden md:block"
            />
            <ContentWrapper
              title={content1?.title}
              titleClass="text-white"
              content={content1?.text}
              contentClass="text-primary-light"
              contentWrapperClass="md:hidden"
            />
            <ContentWrapper
              title={content2?.title}
              titleClass="md:text-3xl text-white"
              content={content2?.text}
              contentClass="text-primary-light"
              contentWrapperClass="hidden md:block"
            />
            <ContentWrapper
              title={content2?.title}
              titleClass="md:text-3xl text-white"
              content={content2?.text}
              contentClass="text-primary-light"
              contentWrapperClass="md:hidden"
            />
            <ContentWrapper
              title={content3?.title}
              titleClass="md:text-3xl text-white"
              content={content3?.text}
              contentClass="text-primary-light"
              contentWrapperClass="hidden md:block"
            />
            <ContentWrapper
              title={content4?.title}
              titleClass="md:text-3xl text-white"
              content={content4?.text}
              contentClass="text-primary-light"
              contentWrapperClass="md:hidden"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
