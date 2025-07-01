import type { Components, JSX } from "../dist/types/components";

interface PdDropdown extends Components.PdDropdown, HTMLElement {}
export const PdDropdown: {
    prototype: PdDropdown;
    new (): PdDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
