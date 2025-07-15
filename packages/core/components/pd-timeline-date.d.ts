import type { Components, JSX } from "../dist/types/components";

interface PdTimelineDate extends Components.PdTimelineDate, HTMLElement {}
export const PdTimelineDate: {
    prototype: PdTimelineDate;
    new (): PdTimelineDate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
