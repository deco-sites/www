import { useState } from "preact/hooks";

interface SlideProps{
    texto1: string;
    texto2: string;
    texto3: string;
    texto4: string;
}

function SlidePost({texto1, texto2, texto3, texto4}: SlideProps) {

    const [firstSlideIndex, setFirstSlideIndex] = useState(0);
  const slides = [texto1, texto2, texto3, texto4];

  const prevSlide = () => {
    setFirstSlideIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setFirstSlideIndex((prev) => (prev === slides.length - 3 ? prev : prev + 1));
  };

  const slideContent = (
    <div class="flex justify-center gap-3 relative">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          class={`h-[380px] w-[360px] bg-red-100 ${
            index + firstSlideIndex < slides.length ? "" : "hidden"
          }`}
        >
          {slides[index + firstSlideIndex]}
        </div>
      ))}
    </div>
  );

  const arrows = (
    <div class="w-full flex justify-between absolute bottom-1/2 left-0 right-0">
      <button onClick={prevSlide} disabled={firstSlideIndex === 0} class="">
        {"<"}
      </button>
      <button class=""
        onClick={nextSlide}
        disabled={firstSlideIndex === slides.length - 3}
      >
        {">"}
      </button>
    </div>
  );
    return (
        <div class="max-w-[1200px] mx-auto relative mb-8">
            {slideContent}
            {arrows}
        </div>
    );
};


export default SlidePost