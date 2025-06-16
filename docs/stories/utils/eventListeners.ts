export const defaultCustomEventProps = ['bubbles', 'defaultPrevented', 'detail', 'target', 'timeStamp', 'type'];
import { action } from 'storybook/actions';

export function addEventlisteners(
    elementTag: string,
    events: string[],
    options?: { props?: string[]; isCustomEvent?: boolean },
) {
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll(elementTag);
        console.log(elements);
        if (elements.length === 0) return;

        const { props = defaultCustomEventProps, isCustomEvent = true } = options ?? {};

        for (const el of elements) {
            for (const event of events) {
                el.addEventListener(event, e => {
                    const newObj = {};
                    if (isCustomEvent) {
                        for (const key in e) {
                            if (props.includes(key)) {
                                newObj[key] = e[key];
                            }
                        }
                        action(event)(newObj);
                    } else {
                        action(event)(e);
                    }
                });
                console.log('added event', event);
            }
        }
    });
}
