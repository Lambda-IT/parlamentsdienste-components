import type { Components, JSX } from "../dist/types/components";

interface PdSort extends Components.PdSort, HTMLElement {}
export const PdSort: {
    prototype: PdSort;
    new (): PdSort;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
