import type { Components, JSX } from "../dist/types/components";

interface PdDropdownItem extends Components.PdDropdownItem, HTMLElement {}
export const PdDropdownItem: {
    prototype: PdDropdownItem;
    new (): PdDropdownItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
