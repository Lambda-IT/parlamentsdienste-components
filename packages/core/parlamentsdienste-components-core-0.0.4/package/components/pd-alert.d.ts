import type { Components, JSX } from "../dist/types/components";

interface PdAlert extends Components.PdAlert, HTMLElement {}
export const PdAlert: {
    prototype: PdAlert;
    new (): PdAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
