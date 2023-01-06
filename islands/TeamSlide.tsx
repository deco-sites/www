import TeamMemberGroup, {
  PAGE_SIZE,
  setSlidePage,
  time,
} from "$deco/components/ui/TeamMemberGroup.tsx";
import SlidePickerControls from "$deco/components/ui/SlidePickerControls.tsx";
import { useSignal } from "@preact/signals";

export default function TeamSlide() {
  const selected = useSignal(0);
  return (
    <>
      <div
        id="teamMainWrapper"
        class="lg:flex justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0"
      >
        <TeamMemberGroup />
      </div>
      <div id="dots" class="justify-center py-6 hidden lg:flex">
        {Array.from({ length: Math.ceil(time.length / PAGE_SIZE) }).map((
          _,
          index,
        ) => (
          <SlidePickerControls
            selected={selected.value === index}
            onClick={() => {
              setSlidePage(index * PAGE_SIZE);
              selected.value = index;
            }}
          />
        ))}
      </div>
    </>
  );
}
