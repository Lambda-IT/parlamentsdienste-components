import type { Components, JSX } from "../dist/types/components";

interface PdCheckbox extends Components.PdCheckbox, HTMLElement {}
export const PdCheckbox: {
    prototype: PdCheckbox;
    new (): PdCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
