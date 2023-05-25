import { useId } from "preact/hooks";
import Slider from "../components/ui/Slider.tsx";
import SliderControllerJS  from "../components/ui/SliderJS.tsx"

export interface Props {
    // bottomPadding?: string;
    cards: Array<{
        urlImage: string;
        title: string;
        author: string;
        date: string;
    }>;
  }
  
  export default function Carousel({cards }: Props) {
    const id = useId();
  
    return (
      <section
        class="md:bg-white-green mt-20 pb-28"
        id={id}
      >
        <div class="relative px-6 md:px-[7rem] max-w-screen-2xl m-auto">
          <Slider
            class="relative gap-6 col-span-full row-start-2 row-end-5 hidden-scroll"
            snap="opacity-50 disabled:opacity-100 focus:outline-none"
          >
            {cards?.map((card) => {
              return (
                <a href="#" target="_blank" class="rounded-[8px] w-[120px]">
                  <article class="rounded-[8px] border-[1px] border-solid border-border-black-opacity bg-white overflow-x-hidden h-[475px] md:h-[505px]">
                    <div>
                      <img
                        src={card.urlImage}
                        class="w-auto max-h-[240px] min-w-[418px]"
                        loading={"lazy"}
                           
                      />
                    </div>
                    <div class="px-6 pt-8">
                      <p class="bg-black text-white px-3 w-[105px] h-6 text-[14px]  rounded-[10px] flex items-center uppercase">
                            category
                      </p>
                    </div>
                    <div class="flex flex-col gap-4 justify-between mt-6 px-6 rounded-[8px] w-full">
                      <div class="flex flex-col gap-2">
                        <p class="text-thin text-left text-[24px]">
                          {card.title}
                        </p>
                      </div>
                      <div class="flex flex-col gap-2">
                        <p class="text-[#66736C] text-left text-[18px]">
                         Written by {card.author}
                        </p>
                        <p class="text-[#66736C] text-left text-[18px] ">
                          {card.date}
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              );
            })}
          </Slider>
          <div class="flex flex-row justify-end gap-2 pt-6 pb-12 md:pt-0 md:pb-0 md:py-0">
            <button
              class="rounded-full p-3 bg-black focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:left-[6rem] md:top-[40%]"
              data-slide="prev"
              aria-label="Previous item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              class="rounded-full p-3 bg-black focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:top-[40%] right-[6rem]"
              data-slide="next"
              aria-label="Next item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <SliderControllerJS rootId={id}/>
      </section>
    );
  }
  