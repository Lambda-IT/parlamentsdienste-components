import type { Components, JSX } from "../dist/types/components";

interface PdTable extends Components.PdTable, HTMLElement {}
export const PdTable: {
    prototype: PdTable;
    new (): PdTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
