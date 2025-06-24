import type { Components, JSX } from "../dist/types/components";

interface PdChip extends Components.PdChip, HTMLElement {}
export const PdChip: {
    prototype: PdChip;
    new (): PdChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
