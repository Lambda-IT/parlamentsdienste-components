import type { Components, JSX } from "../dist/types/components";

interface PdDatepicker extends Components.PdDatepicker, HTMLElement {}
export const PdDatepicker: {
    prototype: PdDatepicker;
    new (): PdDatepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
