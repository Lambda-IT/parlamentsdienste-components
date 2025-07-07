import type { Components, JSX } from "../dist/types/components";

interface PdSlider extends Components.PdSlider, HTMLElement {}
export const PdSlider: {
    prototype: PdSlider;
    new (): PdSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
