import type { Components, JSX } from "../dist/types/components";

interface PdRadioGroup extends Components.PdRadioGroup, HTMLElement {}
export const PdRadioGroup: {
    prototype: PdRadioGroup;
    new (): PdRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
