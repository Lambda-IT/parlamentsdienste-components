import type { Components, JSX } from "../dist/types/components";

interface PdMenu extends Components.PdMenu, HTMLElement {}
export const PdMenu: {
    prototype: PdMenu;
    new (): PdMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
