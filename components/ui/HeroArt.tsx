import SquareGlass from "./SquareGlass.tsx";

interface DotsProps {
  class?: string;
}

function Dots({ class: classNames = "bg-white" }: DotsProps) {
  return (
    <div class="flex p-2.5">
      <div class={`rounded-full ml-1 mt-1 h-2 w-2 ${classNames}`} />
      <div class={`rounded-full ml-1 mt-1 h-2 w-2 ${classNames}`} />
      <div class={`rounded-full ml-1 mt-1 h-2 w-2 ${classNames}`} />
    </div>
  );
}

export default function HeroArt() {
  return (
    <div class="absolute left-[19rem] md:left-[50.688rem] lg:left-[102%]">
      <SquareGlass
        color="#ffffff50"
        class="via-transparent -bottom-[21rem] right-[0rem] sm:-bottom-[20rem] sm:-right-[2rem] md:-bottom-[18rem] md:right-[10rem] lg:-bottom-[37rem] lg:right-32 xl:-bottom-[36rem] xl:right-80 border-1 border-[#ffffffa0] border-r-0"
        style="filter: drop-shadow(-3rem 3rem 1.25rem rgb(0 0 0 / 0.4));"
      />
      <SquareGlass
        color="#2FD180"
        class="via-transparent -bottom-[17.5rem] -right-[8rem] sm:-bottom-[17rem] sm:-right-[10rem] md:-bottom-[15rem] md:right-[2rem] lg:-bottom-[26rem] lg:-right-32 xl:-bottom-[25rem] xl:right-12"
        style="backdrop-filter: blur(34px);"
      >
        <Dots class="bg-primary-light" />
      </SquareGlass>
      <SquareGlass
        color="#2FD180"
        class="via-transparent -bottom-[24rem] -right-[10rem] sm:-bottom-[23rem] sm:-right-[12rem] md:-bottom-[23rem] md:right-[1rem] lg:-bottom-[38rem] lg:-right-36 xl:-bottom-[38rem] xl:right-4"
      >
        <Dots class="bg-[#87ECBE]" />
      </SquareGlass>
      <SquareGlass
        color="#ffffff50"
        class="via-transparent -bottom-[23rem] -right-[16rem] sm:-bottom-[23rem] sm:-right-[18rem] md:-bottom-[22rem] md:-right-[5rem] lg:-bottom-[38rem] lg:-right-72 xl:-bottom-[38rem] xl:-right-36 border-[1px] border-white"
        style="filter: drop-shadow(-3rem 3rem 1.25rem rgb(0 0 0 / 0.4)); backdrop-filter: blur(34px);"
      >
        <Dots class="bg-[#87ECBE]" />
      </SquareGlass>
    </div>
  );
}
