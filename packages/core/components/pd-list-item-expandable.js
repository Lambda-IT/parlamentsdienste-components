import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { c as collapse, e as expand } from './p-DJsl1pvl.js';
import { d as defineCustomElement$4 } from './p-CiZ4Y22d.js';
import { d as defineCustomElement$3 } from './p-CGp-npjr.js';
import { d as defineCustomElement$2 } from './p-DQDubugP.js';

const pdListItemExpandableCss = ":host{background-color:var(--pd-list-item-background, transparent);border-radius:0.25rem;overflow:hidden;--negative-icon-margin:-0.5rem 0.25rem -0.5rem -0.5rem}:host .pd-list-item-expandable-header{display:grid;grid-template-columns:auto auto 1fr auto;transition:background-color 0.15s ease-in-out;align-items:center;padding:var(--pd-list-item-padding, 0.75rem 1rem);}:host .pd-list-item-expandable-header.pd-list-item-expandable-selected{background-color:#e3fafc}:host .pd-list-item-expandable-header.pd-content-hover{background-color:var(--pd-list-item-content-hover, #dee2e6);cursor:pointer}:host *,:host ::before,:host ::after{box-sizing:border-box;appearance:none;outline:none}:host .pd-list-item-expandable-checkbox{--pd-checkbox-text-padding-left:0;display:flex;align-items:center;height:100%;padding-right:0.875rem}:host .pd-list-item-expandable-status{height:100%;display:flex;justify-content:center;align-items:center;margin:var(--negative-icon-margin)}:host .pd-list-item-expandable-content{flex:1 1 auto;grid-column:3/span 1}:host .pd-list-item-expandable-additional-content-wrapper{transition:height 0.3s ease-in-out;height:auto}:host .pd-list-item-expandable-additional-content-wrapper .pd-list-item-expandable-additional-content{padding:var(--pd-list-item-padding, 0.75rem 1rem)}:host .pd-list-item-expandable-actions{display:flex;margin:var(--negative-icon-margin);margin-left:1rem}:host .pd-list-item-expandable-actions .pd-list-item-expandable-expand,:host .pd-list-item-expandable-actions .pd-list-item-expandable-edit{background-color:transparent;border:none;fill:#0b7285;cursor:pointer;padding:0 0 0 0.125rem;margin:0}:host .pd-list-item-expandable-actions .pd-list-item-expandable-expand:hover,:host .pd-list-item-expandable-actions .pd-list-item-expandable-edit:hover{fill:#15aabf}:host .pd-list-item-expandable-actions .pd-list-item-expandable-expand:focus-visible,:host .pd-list-item-expandable-actions .pd-list-item-expandable-edit:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}:host .pd-list-item-expandable-actions .pd-list-item-expandable-expand:active,:host .pd-list-item-expandable-actions .pd-list-item-expandable-edit:active{fill:#66d9e8}:host .pd-list-item-expandable-actions .pd-list-item-expandable-menu{--pd-menu-horizontal-padding:0}";

const ListItemExpandable = /*@__PURE__*/ proxyCustomElement(class ListItemExpandable extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdEdit = createEvent(this, "pd-edit");
        this.pdExpand = createEvent(this, "pd-expand");
        this.pdSelected = createEvent(this, "pd-selected");
        this.pdCollapsed = createEvent(this, "pd-collapsed");
        this.pdContentClick = createEvent(this, "pd-content-click");
    }
    contentWrapperElement;
    contentHover = false;
    /**
     * Status icon for list item
     */
    status;
    /**
     * Expands / collapses the inner content of the list item
     */
    collapsed = true;
    /** Shows edit button */
    checkbox = false;
    /** Shows edit button */
    edit = false;
    /** Shows expand button with simple event (no expandable inner content) */
    expand = false;
    /** Shows menu button */
    menu = false;
    /** Shows expand (toggle) button for expandable inner content */
    expandable = false;
    /** Sets check state of the checkbox true/false */
    checked = false;
    /** Adds content click event and style to item */
    contentClick = false;
    /** Edit button click event */
    pdEdit;
    /** Expand button click event */
    pdExpand;
    /** Checkbox selected event */
    pdSelected;
    /** Inner content collapsed/expanded */
    pdCollapsed;
    /** Event on content click (content-click has to be set) */
    pdContentClick;
    valueChanged(collapsed) {
        if (collapsed) {
            collapse(this.contentWrapperElement);
        }
        else {
            expand(this.contentWrapperElement);
        }
    }
    componentDidLoad() {
        // start collapsed
        if (this.collapsed) {
            this.contentWrapperElement.style.height = '0';
            this.contentWrapperElement.style.overflow = 'hidden';
        }
    }
    handleExpand() {
        if (this.expandable)
            this.collapsed = !this.collapsed;
        if (this.expand)
            this.pdExpand.emit();
        if (this.expandable)
            this.pdCollapsed.emit(this.collapsed);
    }
    checkboxChecked(event) {
        event.stopPropagation();
        this.checked = event.detail;
        this.pdSelected.emit(event.detail);
    }
    render() {
        return (h(Host, { key: '00c95ec888164a9dbae31e184e44338e3f693a24' }, h("div", { key: '4eb954a6d97715e13b982ccfc27b5d412b891b65', class: {
                'pd-content-hover': this.contentHover,
                'pd-list-item-expandable-selected': this.checked,
                'pd-list-item-expandable-header': true,
            } }, this.renderCheckbox(), this.renderStatus(), h("div", { key: 'aeda740d0df5e6a7d21d72e5496ac098d6def715', class: "pd-list-item-expandable-content", onClick: () => (this.contentClick ? this.pdContentClick.emit() : null), onMouseOver: () => (this.contentClick ? (this.contentHover = true) : null), onMouseOut: () => (this.contentClick ? (this.contentHover = false) : null) }, h("slot", { key: 'baf35c1877ae46f211bd1a7999566131a5d2d909' })), h("div", { key: '3d146a585bb6b165986839b9e6a46f6e77e7bb7d', class: {
                'pd-list-item-expandable-actions': this.edit || this.expand || this.expandable || this.menu,
            }, "data-test": "pd-list-item-expandable-actions" }, h("slot", { key: 'e06744a5ac0fe05630879b4bb7d4c9f091dbd3b2', name: "action-left" }), this.renderEdit(), this.renderMenu(), this.renderExpand(), h("slot", { key: 'f81197a7983257424f922b7e30468a4d441d15d6', name: "action-right" }))), h("div", { key: '9e4d1a12222f03b22d9090ed53862309774cb1ac', ref: el => (this.contentWrapperElement = el), class: "pd-list-item-expandable-additional-content-wrapper" }, h("div", { key: '9373413a25965456808c53a3eb1e3c0b5f375edf', class: "pd-list-item-expandable-additional-content" }, h("slot", { key: 'ad6a0af3edd2593fc2aa9e021fe9e1822755563d', name: "expandable" })))));
    }
    renderStatus = () => {
        if (!this.status)
            return;
        return (h("div", { class: "pd-list-item-expandable-status", "data-test": "pd-list-item-expandable-status", onClick: () => (this.contentClick ? this.pdContentClick.emit() : null), onMouseOver: () => (this.contentClick ? (this.contentHover = true) : null), onMouseOut: () => (this.contentClick ? (this.contentHover = false) : null) }, this.renderStatusIcon()));
    };
    renderExpand = () => {
        if (!this.expandable && !this.expand)
            return;
        return (h("button", { class: "pd-list-item-expandable-expand", onClick: () => this.handleExpand(), "data-test": "pd-list-item-expandable-expand" }, h("pd-icon", { name: "caret", rotate: this.collapsed ? 0 : 180, size: 2.2 })));
    };
    renderEdit() {
        if (!this.edit)
            return;
        return (h("button", { class: "pd-list-item-expandable-edit", onClick: () => this.pdEdit.emit(), "data-test": "pd-list-item-expandable-edit" }, h("pd-icon", { name: "edit", size: 2.2 })));
    }
    renderMenu() {
        if (!this.menu)
            return;
        return (h("pd-menu", { class: "pd-list-item-expandable-menu", "data-test": "pd-list-item-expandable-menu" }, h("slot", { name: "menu" })));
    }
    renderStatusIcon() {
        switch (this.status) {
            case 'success':
                return h("pd-icon", { name: "status_green", size: 2.5 });
            case 'warning':
                return h("pd-icon", { name: "status_orange", size: 2.5 });
            case 'danger':
                return h("pd-icon", { name: "status_red", size: 2.5 });
            case 'info':
                return h("pd-icon", { name: "status_blue", size: 2.5 });
            case 'unset':
                return h("pd-icon", { name: "status_undefined", size: 2.5 });
        }
    }
    renderCheckbox() {
        if (!this.checkbox)
            return;
        return (h("div", { class: "pd-list-item-expandable-checkbox" }, h("pd-checkbox", { "onPd-checked": ev => this.checkboxChecked(ev), checked: this.checked, "data-test": "pd-list-item-expandable-checkbox" })));
    }
    static get watchers() { return {
        "collapsed": ["valueChanged"]
    }; }
    static get style() { return pdListItemExpandableCss; }
}, [1, "pd-list-item-expandable", {
        "status": [1],
        "collapsed": [4],
        "checkbox": [4],
        "edit": [4],
        "expand": [4],
        "menu": [4],
        "expandable": [4],
        "checked": [1028],
        "contentClick": [4, "content-click"],
        "contentHover": [32]
    }, undefined, {
        "collapsed": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-list-item-expandable", "pd-checkbox", "pd-icon", "pd-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-list-item-expandable":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ListItemExpandable);
            }
            break;
        case "pd-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "pd-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "pd-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const PdListItemExpandable = ListItemExpandable;
const defineCustomElement = defineCustomElement$1;

export { PdListItemExpandable, defineCustomElement };
//# sourceMappingURL=pd-list-item-expandable.js.map

//# sourceMappingURL=pd-list-item-expandable.js.map