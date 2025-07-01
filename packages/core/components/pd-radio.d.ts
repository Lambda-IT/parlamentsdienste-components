import type { Components, JSX } from "../dist/types/components";

interface PdRadio extends Components.PdRadio, HTMLElement {}
export const PdRadio: {
    prototype: PdRadio;
    new (): PdRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
