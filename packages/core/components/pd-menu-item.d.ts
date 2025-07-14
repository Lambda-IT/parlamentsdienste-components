import type { Components, JSX } from "../dist/types/components";

interface PdMenuItem extends Components.PdMenuItem, HTMLElement {}
export const PdMenuItem: {
    prototype: PdMenuItem;
    new (): PdMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
