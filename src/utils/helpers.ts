export const clamp = (min: number, n: number, max: number) => {
    return Math.max(min, Math.min(n, max));
};

export const now = (ev: UIEvent) => {
    return ev.timeStamp || Date.now();
};

export const pointerCoord = (ev: any): { x: number; y: number } => {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
