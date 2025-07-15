import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const pdTimelineDateCss = ":host{display:block}*,::before,::after{box-sizing:border-box;outline:none}.pd-timeline-date{display:flex;align-items:center;position:relative;z-index:10}.pd-timeline-date .pd-timeline-date-dot-wrapper{width:1em;height:1em;display:flex;align-items:center;justify-content:center}.pd-timeline-date .pd-timeline-date-dot-wrapper .pd-timeline-date-dot{width:0.875em;min-width:0.875em;height:0.875em;border-radius:100%;background-color:#033840;border:0.0625em solid #ffffff;box-shadow:0px 0.125em 0.25em rgba(11, 11, 11, 0.45)}.pd-timeline-date .pd-timeline-date-text{padding-left:1em;font-weight:700}.pd-timeline-content{margin-left:2em;margin-top:1em;position:relative;padding:0px;background:#ffffff;border-radius:0.25em;border:#dee2e6 solid 2px}.pd-timeline-content:after{content:\"\";position:absolute;border-style:solid;border-width:0 10px 10px;border-color:#f5f5f5 transparent;display:block;width:0;z-index:1;top:-10px;left:0.8125em}.pd-timeline-content:before{content:\"\";position:absolute;border-style:solid;border-width:0 11px 11px;border-color:#dee2e6 transparent;display:block;width:0;z-index:0;top:-13px;left:0.75em}.pd-timeline-content.pd-timeline-content-notitle:after{border-color:#ffffff transparent}.pd-timeline-content .pd-timeline-content-title{padding:0.45em 0.625em;background-color:#f5f5f5;font-weight:700;overflow:hidden;text-overflow:ellipsis}.pd-timeline-content .pd-timeline-content-title a{text-decoration:none;color:#0b7285}.pd-timeline-content .pd-timeline-content-title a:hover{color:#15aabf}.pd-timeline-content .pd-timeline-content-title a:active{color:#66d9e8}.pd-timeline-content .pd-timeline-content-title a:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-timeline-content .pd-timeline-content-text{padding:0.625em;overflow:hidden;text-overflow:ellipsis}";

const TimelineDate = /*@__PURE__*/ proxyCustomElement(class TimelineDate extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * Header text
     */
    header;
    /**
     * Header link location
     */
    href;
    /**
     * Header link target
     */
    target = '_blank';
    /**
     * Timeline date
     */
    date = '';
    render() {
        return (h(Host, { key: 'b3cdf4dd982dccf17f979941bae148dd04c2a546' }, h("div", { key: '7f13640b567225df08b3141e596c501938c930a8', class: "pd-timeline-date" }, h("div", { key: '0e278fc4dd5f1a03686337ec2ba08dc4dad272f1', class: "pd-timeline-date-dot-wrapper" }, h("div", { key: '7323ca90a01b0a22267ed99c86573a7d34e901a1', class: "pd-timeline-date-dot" })), h("div", { key: '2f9df3ba812427c6c05554bdfc7143b1aaf03653', class: "pd-timeline-date-text", "data-test": "pd-timeline-date-text" }, this.date)), h("div", { key: '2b2a51b3108117bb024b14f4b8ce6c892b512897', class: { 'pd-timeline-content': true, 'pd-timeline-content-notitle': !this.header } }, this.renderTitle(), h("div", { key: 'c897e5de8e62c24905aede92cd1d8d2e6b0ccd2e', class: "pd-timeline-content-text" }, h("slot", { key: 'b0023ce4f59641d2fd173f10f579257d21f4bda0' })))));
    }
    renderTitle() {
        if (!this.header)
            return;
        return (h("div", { class: "pd-timeline-content-title" }, !this.href ? (h("span", { "data-test": "pd-timeline-title" }, this.header)) : (h("a", { href: this.href, target: this.target, "data-test": "pd-timeline-title" }, this.header))));
    }
    static get style() { return pdTimelineDateCss; }
}, [1, "pd-timeline-date", {
        "header": [1],
        "href": [1],
        "target": [1],
        "date": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-timeline-date"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-timeline-date":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TimelineDate);
            }
            break;
    } });
}
defineCustomElement$1();

const PdTimelineDate = TimelineDate;
const defineCustomElement = defineCustomElement$1;

export { PdTimelineDate, defineCustomElement };
//# sourceMappingURL=pd-timeline-date.js.map

//# sourceMappingURL=pd-timeline-date.js.map