import type { Components, JSX } from "../dist/types/components";

interface PdModal extends Components.PdModal, HTMLElement {}
export const PdModal: {
    prototype: PdModal;
    new (): PdModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
