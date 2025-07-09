<script lang="ts">
import { PdAlert, PdInput } from '@parlamentsdienste-components/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'MyComponent',
    components: { PdAlert, PdInput },
    setup() {
        const inputValue = ref('hello');

        const handleChange = event => {
            console.log('🚀 ~ event:', event);

            // inputValue.value = event.detail?.value ?? event.target.value;
        };
        return { inputValue, handleChange };
    },
});
</script>

<template>
    <h1>Hello World</h1>
    <PdAlert>test</PdAlert>
    <PdInput :value="inputValue" @pd-change="handleChange" />
</template>
