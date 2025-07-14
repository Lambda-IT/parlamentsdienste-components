import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-D45Ufw2y.js';
import { d as defineCustomElement$2 } from './p-CGp-npjr.js';

/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
    let matches = [];
    // If the depth is above the max depth, abort the searching here.
    if (depth >= maxDepth) {
        return matches;
    }
    // Traverses a slot element
    const traverseSlot = ($slot) => {
        // Only check nodes that are of the type Node.ELEMENT_NODE
        // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        const assignedNodes = $slot.assignedNodes().filter(node => node.nodeType === 1);
        if (assignedNodes.length > 0) {
            return queryShadowRoot(assignedNodes[0].parentElement, skipNode, isMatch, maxDepth, depth + 1);
        }
        return [];
    };
    // Go through each child and continue the traversing if necessary
    // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
    // Therefore we fallback to an empty array if it is undefined.
    const children = Array.from(root.children || []);
    for (const $child of children) {
        // Check if the node and its descendants should be skipped
        if (skipNode($child)) {
            continue;
        }
        // If the child matches we always add it
        if (isMatch($child)) {
            matches.push($child);
        }
        if ($child.shadowRoot != null) {
            matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
        }
        else if ($child.tagName === "SLOT") {
            matches.push(...traverseSlot($child));
        }
        else {
            matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
        }
    }
    return matches;
}

/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
    return $elem.hasAttribute("hidden")
        || ($elem.hasAttribute("aria-hidden") && $elem.getAttribute("aria-hidden") !== "false")
        // A quick and dirty way to check whether the element is hidden.
        // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
        // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
        // we won't be able to catch it here. We accept it due to the huge performance benefits.
        || $elem.style.display === `none`
        || $elem.style.opacity === `0`
        || $elem.style.visibility === `hidden`
        || $elem.style.visibility === `collapse`;
    // If offsetParent is null we can assume that the element is hidden
    // https://stackoverflow.com/questions/306305/what-would-make-offsetparent-null
    //|| $elem.offsetParent == null;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
    return $elem.hasAttribute("disabled")
        || ($elem.hasAttribute("aria-disabled") && $elem.getAttribute("aria-disabled") !== "false");
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
    // Discard elements that are removed from the tab order.
    if ($elem.getAttribute("tabindex") === "-1" || isHidden($elem) || isDisabled($elem)) {
        return false;
    }
    return (
    // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
    $elem.hasAttribute("tabindex")
        // Anchor tags or area tags with a href set
        || ($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) && $elem.hasAttribute("href")
        // Form elements which are not disabled
        || ($elem instanceof HTMLButtonElement
            || $elem instanceof HTMLInputElement
            || $elem instanceof HTMLTextAreaElement
            || $elem instanceof HTMLSelectElement)
        // IFrames
        || $elem instanceof HTMLIFrameElement);
}

const timeouts = new Map();
/**
 * Debounces a callback.
 * @param cb
 * @param ms
 * @param id
 */
function debounce(cb, ms, id) {
    // Clear current timeout for id
    const timeout = timeouts.get(id);
    if (timeout != null) {
        window.clearTimeout(timeout);
    }
    // Set new timeout
    timeouts.set(id, window.setTimeout(() => {
        cb();
        timeouts.delete(id);
    }, ms));
}

/**
 * Template for the focus trap.
 */
const template = document.createElement("template");
template.innerHTML = `
	<div id="start"></div>
	<div id="backup"></div>
	<slot></slot>
	<div id="end"></div>
`;
/**
 * Focus trap web component.
 * @customElement focus-trap
 * @slot - Default content.
 */
class FocusTrap extends HTMLElement {
    /**
     * Attaches the shadow root.
     */
    constructor() {
        super();
        // The debounce id is used to distinguish this focus trap from others when debouncing
        this.debounceId = Math.random().toString();
        this._focused = false;
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(template.content.cloneNode(true));
        this.$backup = shadow.querySelector("#backup");
        this.$start = shadow.querySelector("#start");
        this.$end = shadow.querySelector("#end");
        this.focusLastElement = this.focusLastElement.bind(this);
        this.focusFirstElement = this.focusFirstElement.bind(this);
        this.onFocusIn = this.onFocusIn.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
    }
    // Whenever one of these attributes changes we need to render the template again.
    static get observedAttributes() {
        return [
            "inactive"
        ];
    }
    /**
     * Determines whether the focus trap is active or not.
     * @attr
     */
    get inactive() {
        return this.hasAttribute("inactive");
    }
    set inactive(value) {
        value ? this.setAttribute("inactive", "") : this.removeAttribute("inactive");
    }
    /**
     * Returns whether the element currently has focus.
     */
    get focused() {
        return this._focused;
    }
    /**
     * Hooks up the element.
     */
    connectedCallback() {
        this.$start.addEventListener("focus", this.focusLastElement);
        this.$end.addEventListener("focus", this.focusFirstElement);
        // Focus out is called every time the user tabs around inside the element
        this.addEventListener("focusin", this.onFocusIn);
        this.addEventListener("focusout", this.onFocusOut);
        this.render();
    }
    /**
     * Tears down the element.
     */
    disconnectedCallback() {
        this.$start.removeEventListener("focus", this.focusLastElement);
        this.$end.removeEventListener("focus", this.focusFirstElement);
        this.removeEventListener("focusin", this.onFocusIn);
        this.removeEventListener("focusout", this.onFocusOut);
    }
    /**
     * When the attributes changes we need to re-render the template.
     */
    attributeChangedCallback() {
        this.render();
    }
    /**
     * Focuses the first focusable element in the focus trap.
     */
    focusFirstElement() {
        this.trapFocus();
    }
    /**
     * Focuses the last focusable element in the focus trap.
     */
    focusLastElement() {
        this.trapFocus(true);
    }
    /**
     * Returns a list of the focusable children found within the element.
     */
    getFocusableElements() {
        return queryShadowRoot(this, isHidden, isFocusable);
    }
    /**
     * Focuses on either the last or first focusable element.
     * @param {boolean} trapToEnd
     */
    trapFocus(trapToEnd) {
        if (this.inactive)
            return;
        let focusableChildren = this.getFocusableElements();
        if (focusableChildren.length > 0) {
            if (trapToEnd) {
                focusableChildren[focusableChildren.length - 1].focus();
            }
            else {
                focusableChildren[0].focus();
            }
            this.$backup.setAttribute("tabindex", "-1");
        }
        else {
            // If there are no focusable children we need to focus on the backup
            // to trap the focus. This is a useful behavior if the focus trap is
            // for example used in a dialog and we don't want the user to tab
            // outside the dialog even though there are no focusable children
            // in the dialog.
            this.$backup.setAttribute("tabindex", "0");
            this.$backup.focus();
        }
    }
    /**
     * When the element gains focus this function is called.
     */
    onFocusIn() {
        this.updateFocused(true);
    }
    /**
     * When the element looses its focus this function is called.
     */
    onFocusOut() {
        this.updateFocused(false);
    }
    /**
     * Updates the focused property and updates the view.
     * The update is debounced because the focusin and focusout out
     * might fire multiple times in a row. We only want to render
     * the element once, therefore waiting until the focus is "stable".
     * @param value
     */
    updateFocused(value) {
        debounce(() => {
            if (this.focused !== value) {
                this._focused = value;
                this.render();
            }
        }, 0, this.debounceId);
    }
    /**
     * Updates the template.
     */
    render() {
        this.$start.setAttribute("tabindex", !this.focused || this.inactive ? `-1` : `0`);
        this.$end.setAttribute("tabindex", !this.focused || this.inactive ? `-1` : `0`);
        this.focused ? this.setAttribute("focused", "") : this.removeAttribute("focused");
    }
}
window.customElements.define("focus-trap", FocusTrap);

const pdModalCss = ":host{display:flex;position:fixed;align-items:center;justify-content:center;top:0;bottom:0;right:0;left:0;z-index:1000}*,::before,::after{box-sizing:border-box;appearance:none;outline:none}.pd-modal-wrapper{display:flex;flex-direction:column;background-color:#fff;box-shadow:0px 0px 8px rgba(11, 11, 11, 0.45);z-index:10;padding:1.25rem;position:relative;border-radius:0.25rem;width:var(--pd-modal-width, unset);height:var(--pd-modal-height, unset);min-width:var(--pd-modal-min-width, unset);max-width:var(--pd-modal-max-width, unset);min-height:var(--pd-modal-min-height, unset);max-height:var(--pd-modal-max-height, unset)}.pd-modal-header{display:flex;justify-content:space-between;margin-bottom:1.875rem}.pd-modal-header .pd-modal-title{font-weight:700;overflow:hidden;text-overflow:ellipsis}.pd-modal-header .pd-modal-close{cursor:pointer;appearance:none;background-color:transparent;padding:0;margin:0;border:none;fill:#0b7285;margin-top:-0.475rem;margin-right:-0.475rem;margin-left:0.5rem}.pd-modal-header .pd-modal-close:focus-visible{background-color:#ffec99;color:#033840;fill:#033840}.pd-modal-header .pd-modal-close:hover{fill:#15aabf}.pd-modal-header .pd-modal-close:active{fill:#66d9e8}.pd-modal-content{flex:1 1 auto}.pd-modal-footer{text-align:right}";

const Modal = /*@__PURE__*/ proxyCustomElement(class Modal extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pdClosed = createEvent(this, "pd-closed");
        this.pdBackdropClicked = createEvent(this, "pd-backdrop");
        this.pdEscapeClicked = createEvent(this, "pd-escape");
    }
    get element() { return this; }
    /**
     * Configuration properties
     */
    config;
    /**
     * Event that will be executed when the is closed
     */
    pdClosed;
    /**
     * Event that will be executed when the modal backdrop is clicked
     */
    pdBackdropClicked;
    /**
     * Event that will be executed when the escape button was clicked
     */
    pdEscapeClicked;
    backdropClick() {
        this.pdBackdropClicked.emit();
        this.closeModal();
    }
    handleKeyDown(ev) {
        switch (ev.key) {
            case 'Escape': {
                this.pdEscapeClicked.emit();
                this.closeModal();
                break;
            }
        }
    }
    closeModal() {
        this.pdClosed.emit();
    }
    render() {
        return (h(Host, { key: '9e18a02cc8208fc6ae3b2db0e7aa6a361a06d507', style: {
                zIndex: this.config?.zIndex ?? null,
            } }, h("focus-trap", { key: '7923ec75c00e0b87d3ca7199b19165ae539ad204' }, h("pd-backdrop", { key: '88671fc71a697f4b83aae54225127c93e341d094', visible: this.config?.backdropVisible ?? false }), h("div", { key: '9ff09b0658d7deb21841db0d87384b4fc0a592dd', tabindex: "0", role: "dialog", class: "pd-modal-wrapper" }, h("div", { key: '8e48bbe20c5152f2f6d70cb11e373bcac5efce34', class: "pd-modal-header" }, h("span", { key: '979260322491ba1a5f827b307fdd373c6120abf9', class: "pd-modal-title", "data-test": "pd-modal-title" }, this.config?.title), h("button", { key: '10440e4d085d043a8a95a5d49c8879182027b0ef', class: "pd-modal-close", onClick: () => this.closeModal(), "data-test": "pd-modal-close" }, h("pd-icon", { key: '42fd01d457173cc46859b64ab478a1b03ee27e5a', name: "close", size: 2 }))), h("div", { key: 'ef349db39655d0df3f9d78eecb676ce44afc4d21', class: "pd-modal-content" }, h("slot", { key: '8cd49f10088dcd21f68f3470c72f0985619ae299' })), h("div", { key: 'c964e3f357bbe8c7772d262ebb513d172ff17e90', class: "pd-modal-footer" }, h("slot", { key: '8f96a5e339ea8d0f472baa7a4a691b2d1612df9f', name: "footer" }))))));
    }
    static get style() { return pdModalCss; }
}, [1, "pd-modal", {
        "config": [16]
    }, [[2, "pd-tap", "backdropClick"], [0, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["pd-modal", "pd-backdrop", "pd-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "pd-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Modal);
            }
            break;
        case "pd-backdrop":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "pd-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const PdModal = Modal;
const defineCustomElement = defineCustomElement$1;

export { PdModal, defineCustomElement };
//# sourceMappingURL=pd-modal.js.map

//# sourceMappingURL=pd-modal.js.map