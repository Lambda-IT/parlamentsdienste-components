import type { Components, JSX } from "../dist/types/components";

interface PdPanelContent extends Components.PdPanelContent, HTMLElement {}
export const PdPanelContent: {
    prototype: PdPanelContent;
    new (): PdPanelContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
