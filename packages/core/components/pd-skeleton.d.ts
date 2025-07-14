import type { Components, JSX } from "../dist/types/components";

interface PdSkeleton extends Components.PdSkeleton, HTMLElement {}
export const PdSkeleton: {
    prototype: PdSkeleton;
    new (): PdSkeleton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
