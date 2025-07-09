import type { Components, JSX } from "../dist/types/components";

interface PdAnimation extends Components.PdAnimation, HTMLElement {}
export const PdAnimation: {
    prototype: PdAnimation;
    new (): PdAnimation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
