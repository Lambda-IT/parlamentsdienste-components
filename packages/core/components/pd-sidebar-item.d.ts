import type { Components, JSX } from "../dist/types/components";

interface PdSidebarItem extends Components.PdSidebarItem, HTMLElement {}
export const PdSidebarItem: {
    prototype: PdSidebarItem;
    new (): PdSidebarItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
