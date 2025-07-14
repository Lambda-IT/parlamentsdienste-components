import type { Components, JSX } from "../dist/types/components";

interface PdTableFilter extends Components.PdTableFilter, HTMLElement {}
export const PdTableFilter: {
    prototype: PdTableFilter;
    new (): PdTableFilter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
