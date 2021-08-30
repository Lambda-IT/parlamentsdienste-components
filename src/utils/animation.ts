export const collapse = (element) => {
    // get current height of element
    var sectionHeight = element.scrollHeight;

    // remove transition from element
    var elementTransition = element.style.transition;
    element.style.transition = '';
    element.style.overflow = 'hidden';
    console.log(`DEBUG: collapsed`, element);

    // in next frame, set height from auto to actual height of element and add transition again
    requestAnimationFrame(function () {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;

        // now set height to 0 and start transition
        requestAnimationFrame(function () {
            element.style.height = '0';
        });
    });
};

export const expand = (element) => {
    // get expanded height of element
    var sectionHeight = element.scrollHeight;

    // set height to expanded
    element.style.height = sectionHeight + 'px';

    // wait for transition to end
    element.addEventListener('transitionend', function transitionDone() {
        // remove this event listener so it only gets triggered once
        element.removeEventListener('transitionend', transitionDone);
        // set height back to auto when transition is done
        element.style.height = null;
        element.style.overflow = 'visible';
        console.log(`DEBUG: expanded`, element);
    });
};
