# custom v-model directive to use with webcomponents

## Implementation

```javascript
const wm = new WeakMap();

Vue.directive('model-pd', {
    bind(el, binding, vnode) {
        const inputHandler = event => {
            var value = event.target.value;
            if ('' + event.target.value === 'true') value = true;
            if ('' + event.target.value === 'false') value = false;
            _.set(vnode.context, binding.expression, value);
        };
        wm.set(el, inputHandler);
        if (el.nodeName !== 'PD-RADIO') {
            el.value = binding.value;
        }
        el.addEventListener('input', inputHandler);
    },

    componentUpdated(el, binding) {
        if (el.nodeName !== 'PD-RADIO') {
            el.value = binding.value;
        }
    },

    unbind(el) {
        const inputHandler = wm.get(el);
        el.removeEventListener(el, inputHandler);
    },
});
```
