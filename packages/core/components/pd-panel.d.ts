import type { Components, JSX } from "../dist/types/components";

interface PdPanel extends Components.PdPanel, HTMLElement {}
export const PdPanel: {
    prototype: PdPanel;
    new (): PdPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
