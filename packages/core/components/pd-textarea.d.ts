import type { Components, JSX } from "../dist/types/components";

interface PdTextarea extends Components.PdTextarea, HTMLElement {}
export const PdTextarea: {
    prototype: PdTextarea;
    new (): PdTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
