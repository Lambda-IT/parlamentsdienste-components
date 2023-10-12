import { createPopper } from '@popperjs/core';

export default function createMenuPopper(button: HTMLElement, menu: HTMLElement) {
    if (!menu) return;

    return createPopper(button, menu, {
        modifiers: [
            {
                name: 'sameWidth',
                enabled: true,
                phase: 'beforeWrite',
                requires: ['computeStyles'],
                fn: ({ state }) => {
                    state.styles.popper.width = `${state.rects.reference.width}px`;
                },
                effect: ({ state }) => {
                    // perform side effects
                    state.elements.popper.style.width = `${(state.elements.reference as HTMLElement).offsetWidth}px`;
                    return () => {
                        // cleanup side effects
                    };
                },
            },
        ],
        placement: 'bottom-start',
    });
}
