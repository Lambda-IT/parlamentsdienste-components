import type { Components, JSX } from "../dist/types/components";

interface PdButton extends Components.PdButton, HTMLElement {}
export const PdButton: {
    prototype: PdButton;
    new (): PdButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
