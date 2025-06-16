export const defaultCustomEventProps = ['bubbles', 'defaultPrevented', 'detail', 'target', 'timeStamp', 'type'];
export const defaultClickEventProps = [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type',
];
import { action } from 'storybook/actions';

type EventType = 'CustomEvent' | 'PointerEvent';

const defaultProps: Record<EventType, string[]> = {
    CustomEvent: defaultCustomEventProps,
    PointerEvent: defaultClickEventProps,
};

export function addEventlisteners(
    elementTag: string,
    events: string[],
    options?: { props?: string[]; eventType: EventType },
) {
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll(elementTag);
        console.log(elements);
        if (elements.length === 0) return;

        const { eventType = 'CustomEvent' } = options ?? {};
        const { props = defaultProps[eventType] } = options ?? {};

        for (const el of elements) {
            for (const event of events) {
                el.addEventListener(event, e => {
                    console.log(e);
                    const newObj = { __eventType: eventType, __eventName: event };

                    for (const key in e) {
                        if (props.includes(key)) {
                            newObj[key] = e[key];
                        }
                    }
                    action(event)(newObj);
                });
                console.log('added event', event);
            }
        }
    });
}
