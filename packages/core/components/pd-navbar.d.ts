import type { Components, JSX } from "../dist/types/components";

interface PdNavbar extends Components.PdNavbar, HTMLElement {}
export const PdNavbar: {
    prototype: PdNavbar;
    new (): PdNavbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
