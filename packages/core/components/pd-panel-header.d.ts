import type { Components, JSX } from "../dist/types/components";

interface PdPanelHeader extends Components.PdPanelHeader, HTMLElement {}
export const PdPanelHeader: {
    prototype: PdPanelHeader;
    new (): PdPanelHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
