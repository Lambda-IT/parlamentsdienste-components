import type { Components, JSX } from "../dist/types/components";

interface PdList extends Components.PdList, HTMLElement {}
export const PdList: {
    prototype: PdList;
    new (): PdList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
