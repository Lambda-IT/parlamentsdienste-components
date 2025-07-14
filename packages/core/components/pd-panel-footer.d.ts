import type { Components, JSX } from "../dist/types/components";

interface PdPanelFooter extends Components.PdPanelFooter, HTMLElement {}
export const PdPanelFooter: {
    prototype: PdPanelFooter;
    new (): PdPanelFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
