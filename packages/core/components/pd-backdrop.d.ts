import type { Components, JSX } from "../dist/types/components";

interface PdBackdrop extends Components.PdBackdrop, HTMLElement {}
export const PdBackdrop: {
    prototype: PdBackdrop;
    new (): PdBackdrop;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
