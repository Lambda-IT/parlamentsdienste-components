import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdTimelineCss = ":host{display:block;position:relative;width:var(--pd-timeline-width, auto)}*,::before,::after{box-sizing:border-box;outline:none;appearance:none}.pd-timeline-line{position:absolute;height:100%;width:1em;background-color:#dee2e6;z-index:1}.pd-timeline-line.pd-timeline-start{border-top-right-radius:0.5em;border-top-left-radius:0.5em}.pd-timeline-line.pd-timeline-end{border-bottom-right-radius:0.5em;border-bottom-left-radius:0.5em}.pd-timeline-container{height:100%;padding:1.5em 0}::slotted(pd-timeline-date){margin-bottom:2em}::slotted(pd-timeline-date:last-child){margin-bottom:0}";

const Timeline = /*@__PURE__*/ proxyCustomElement(class Timeline extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * Adds rounded top of the date line to indicate that the timeline starts here
     */
    start = false;
    /**
     * Adds rounded bottom of the date line to indicate that the timeline ends here
     */
    end = false;
    render() {
        return (h(Host, { key: 'aa1db092c7cb57c04ceed035cf970a822deffaa6' }, h("div", { key: '2bf7cf42c17087874b8ab6b7bcf939f5468e9124', class: {
                'pd-timeline-line': true,
                'pd-timeline-start': this.start,
                'pd-timeline-end': this.end,
            } }), h("div", { key: '4e36791c149886dc9053fc298a47bf85bf31e5b3', class: "pd-timeline-container" }, h("slot", { key: 'b9b831f9fc0df914875e52e9f5748b9ed10bd8b3' }))));
    }
    static get style() { return pdTimelineCss; }
}, [1, "pd-timeline", {
        "start": [4],
        "end": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-timeline"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-timeline":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Timeline);
            }
            break;
    } });
}
defineCustomElement$1();

const PdTimeline = Timeline;
const defineCustomElement = defineCustomElement$1;

export { PdTimeline, defineCustomElement };
//# sourceMappingURL=pd-timeline.js.map

//# sourceMappingURL=pd-timeline.js.map