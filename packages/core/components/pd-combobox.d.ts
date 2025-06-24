import type { Components, JSX } from "../dist/types/components";

interface PdCombobox extends Components.PdCombobox, HTMLElement {}
export const PdCombobox: {
    prototype: PdCombobox;
    new (): PdCombobox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
