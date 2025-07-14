import type { Components, JSX } from "../dist/types/components";

interface PdSidebar extends Components.PdSidebar, HTMLElement {}
export const PdSidebar: {
    prototype: PdSidebar;
    new (): PdSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
