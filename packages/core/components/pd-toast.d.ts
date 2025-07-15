import type { Components, JSX } from "../dist/types/components";

interface PdToast extends Components.PdToast, HTMLElement {}
export const PdToast: {
    prototype: PdToast;
    new (): PdToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
