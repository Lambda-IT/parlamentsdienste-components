import type { Components, JSX } from "../dist/types/components";

interface PdListItemExpandable extends Components.PdListItemExpandable, HTMLElement {}
export const PdListItemExpandable: {
    prototype: PdListItemExpandable;
    new (): PdListItemExpandable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
