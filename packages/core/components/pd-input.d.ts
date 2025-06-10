import type { Components, JSX } from "../dist/types/components";

interface PdInput extends Components.PdInput, HTMLElement {}
export const PdInput: {
    prototype: PdInput;
    new (): PdInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
