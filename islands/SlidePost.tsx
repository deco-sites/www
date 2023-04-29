import { useState } from "preact/hooks";
import ArrowLeft from "../components/ui/icons/ArrowLeft.tsx";
import ArrowRight from "../components/ui/icons/ArrowRight.tsx";
import { LoaderReturnType } from "$live/std/types.ts";
import { getBlogPath, PostList } from "$deco/components/utils/Blog.ts";

export interface SlideProps{
    texto1: string;
    texto2: string;
    texto3: string;
    texto4: string;
    postList?: LoaderReturnType<PostList>;
}

function SlidePost({texto1, texto2, texto3, texto4, postList}: SlideProps) {

  const [firstSlideIndex, setFirstSlideIndex] = useState(0);
  const slides = [texto1, texto2, texto3, texto4];

  const prevSlide = () => {
    setFirstSlideIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setFirstSlideIndex((prev) => (prev === slides.length - 3 ? prev : prev + 1));
  };

  const slideContent = (
    <div class="flex justify-center gap-3 relative ">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          class={` w-[370px] bg-white ${
            index + firstSlideIndex < slides.length ? "" : "hidden"
          }`}
        >
          <div class="flex flex-col">
            <div class="">
              <img src="https://i.imgur.com/B3CvM29.png" alt="" 
              class="rounded-t-[8px]"
              height={240}/>
            </div>
            <div class="flex flex-col gap-4 justify-between py-8 px-6 rounded-[8px]">
                    <div class="flex flex-col gap-4">
                      <p class="bg-black text-white px-3 w-[fit-content] text-[14px] z-10 rounded-[26px] flex items-center">
                        Business
                      </p>
                      <p class="text-left text-[20px] text-black opacity-[80%]">
                      Como a deco faz sua loja converter mais
                      </p>
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-[#66736C] text-left">
                        Escrito por Rafael Crespo
                        {/* {postList.posts.map((x)=>(
                          <p>{x.title}</p> 
                        ))} */}
                      </p>
                      <p class="text-[#66736C] text-left">{slides[index + firstSlideIndex]}</p>
                    </div>
                  </div>
          </div>          
        </div>
      ))}
    </div>
  );

  const arrows = (
    <div class="w-full flex justify-between absolute bottom-[170px] left-0 right-0">
      <button onClick={prevSlide} disabled={firstSlideIndex === 0} class="">
        <ArrowLeft/>
      </button>
      <button class=""
        onClick={nextSlide}
        disabled={firstSlideIndex === slides.length - 3}
      >
        <ArrowRight/>
      </button>
    </div>
  );
    return (
        <div class="w-full h-[550px] bg-linear-green-footer">
         <div class="max-w-4xl mx-auto px-8 sm:px-0 mb-8">
            <h1 class="font-normal text-2xl font-medium leading-9 text-blackout">Recommended for you: </h1>
         </div>
          <div class="max-w-[1200px] mx-auto relative text-black">
            {slideContent}
            {arrows}
          </div>
        </div>
    );
};


export default SlidePost