import type { Components, JSX } from "../dist/types/components";

interface PdLabel extends Components.PdLabel, HTMLElement {}
export const PdLabel: {
    prototype: PdLabel;
    new (): PdLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
