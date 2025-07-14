import type { Components, JSX } from "../dist/types/components";

interface PdListItem extends Components.PdListItem, HTMLElement {}
export const PdListItem: {
    prototype: PdListItem;
    new (): PdListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
