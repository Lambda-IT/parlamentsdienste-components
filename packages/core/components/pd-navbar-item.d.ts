import type { Components, JSX } from "../dist/types/components";

interface PdNavbarItem extends Components.PdNavbarItem, HTMLElement {}
export const PdNavbarItem: {
    prototype: PdNavbarItem;
    new (): PdNavbarItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
