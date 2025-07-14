const collapse = (element) => {
    // remove this event listener so it only gets triggered once
    if (element.trDone)
        element.removeEventListener('transitionend', element.trDone);
    // get current height of element
    var sectionHeight = element.scrollHeight;
    // remove transition from element
    var elementTransition = element.style.transition;
    element.style.transition = '';
    element.style.overflow = 'hidden';
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
const expand = (element) => {
    // get expanded height of element
    var sectionHeight = element.scrollHeight;
    // set height to expanded
    element.style.height = sectionHeight + 'px';
    // wait for transition to end
    element.addEventListener('transitionend', (element.trDone = function transitionDone() {
        // set height back to auto when transition is done
        element.style.height = null;
        element.style.overflow = 'visible';
    }));
};

export { collapse as c, expand as e };
//# sourceMappingURL=p-DJsl1pvl.js.map

//# sourceMappingURL=p-DJsl1pvl.js.map