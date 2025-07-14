import type { Components, JSX } from "../dist/types/components";

interface PdTabs extends Components.PdTabs, HTMLElement {}
export const PdTabs: {
    prototype: PdTabs;
    new (): PdTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
