import type { Components, JSX } from "../dist/types/components";

interface PdButtonGroup extends Components.PdButtonGroup, HTMLElement {}
export const PdButtonGroup: {
    prototype: PdButtonGroup;
    new (): PdButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
