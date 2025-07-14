import type { Components, JSX } from "../dist/types/components";

interface PdProgressBar extends Components.PdProgressBar, HTMLElement {}
export const PdProgressBar: {
    prototype: PdProgressBar;
    new (): PdProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
