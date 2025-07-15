import type { Components, JSX } from "../dist/types/components";

interface PdTimeline extends Components.PdTimeline, HTMLElement {}
export const PdTimeline: {
    prototype: PdTimeline;
    new (): PdTimeline;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
