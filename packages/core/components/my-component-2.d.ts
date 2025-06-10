import type { Components, JSX } from "../dist/types/components";

interface MyComponent2 extends Components.MyComponent2, HTMLElement {}
export const MyComponent2: {
    prototype: MyComponent2;
    new (): MyComponent2;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
