import type { Components, JSX } from "../dist/types/components";

interface PdIcon extends Components.PdIcon, HTMLElement {}
export const PdIcon: {
    prototype: PdIcon;
    new (): PdIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
