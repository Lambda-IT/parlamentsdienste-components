import type { Components, JSX } from "../dist/types/components";

interface PdSearch extends Components.PdSearch, HTMLElement {}
export const PdSearch: {
    prototype: PdSearch;
    new (): PdSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
