import { forwardRef, useEffect, useRef } from "preact/compat";
import type { ComponentChildren, JSX } from "preact";

interface BaseProps {
  children: ComponentChildren;
  onBackdropClick?: () => void;
}

export function ModalHeader({ children }: BaseProps) {
  return (
    <header class="p-6 z-10 sticky top-0 left-0 bg-white flex flex-row items-center justify-between w-full text-lg font-medium leading-4 text-black border-b-2 border-deco-light-gray">
      {children}
    </header>
  );
}

export function ModalContent({ children }: BaseProps) {
  return (
    <div class="px-6 z-0 min-h-[100px] text-sm font-medium leading-4 text-black my-2">
      {children}
    </div>
  );
}

export function ModalFooter({ children }: BaseProps) {
  return (
    <footer class="p-6 z-10 flex justify-end gap-2 w-full text-black">
      {children}
    </footer>
  );
}

type Props = BaseProps & JSX.IntrinsicElements["dialog"] & {
  /** @description set to false to disable closing when user clicks outside the modal */
  dismissable?: boolean;
  overflow?:
    | "scroll"
    | "auto"
    | "hidden"
    | "visible"
    | "inherit"
    | "initial"
    | "unset"
    | null;
};

export const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ children, dismissable = true, ...props }, ref) => {
    const myRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
      // Prevent [esc]ape...
      const element = myRef?.current!;

      const preventDefault = (event: Event) => event.preventDefault();
      if (
        dismissable === false || ref == null || typeof ref === "function"
      ) {
        element.addEventListener("cancel", preventDefault);

        return () => {
          element.removeEventListener("cancel", preventDefault);
        };
      }
    }, []);

    const overflow = `overflow-${props.overflow ?? "auto"}`;

    return (
      <dialog
        onClick={(e) => {
          if (
            dismissable === false || ref == null || typeof ref === "function"
          ) {
            return;
          }

          if (e.target === ref.current) {
            ref.current?.close();
          }
        }}
        {...props}
        ref={(node) => {
          myRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        class={`p-0 rounded ${overflow}`}
      >
        {children}
      </dialog>
    );
  },
);

export default Modal;
