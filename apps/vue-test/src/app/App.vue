<script lang="ts">
import { PdAlert, PdCombobox, PdDropdown, PdInput, PdSlider } from '@parlamentsdienste-components/vue';
import { defineComponent, ref, toRaw, watch } from 'vue';

const comboItems = [
    {
        id: '1',
        label: 'Mitteilungen und Verschiedenes',
        value: 'a1',
    },
    {
        id: '2',
        label: 'Pa.Iv. Semadeni. Fakultatives',
        value: 'a2',
    },
    {
        id: '3',
        label: 'Obligatorisches',
        value: 'a3',
    },
    {
        id: '4',
        label: 'Anfrage',
        value: 'a4',
    },
    {
        id: '5',
        label: 'Interpellation',
        value: 'a5',
    },
    {
        id: '6',
        label: 'Motion',
        value: 'a6',
    },
];

export default defineComponent({
    name: 'MyComponent',
    components: { PdAlert, PdInput, PdCombobox, PdSlider, PdDropdown },
    setup() {
        const inputValue = ref('hello');
        const twoWayBinding = ref('two-way binding');
        const selectedItems = ref(comboItems.slice(0, 2)); // Initialize with first two items
        const sliderValue = ref(50);
        const dropDownValue = ref(comboItems[1]);

        watch(
            selectedItems,
            newVal => {
                console.log('selectedItems changed:', toRaw(newVal));
            },
            { deep: true },
        );

        watch(
            sliderValue,
            newVal => {
                console.log('sliderValue changed:', toRaw(newVal));
            },
            { deep: true },
        );

        watch(
            dropDownValue,
            newVal => {
                console.log('dropDownValue changed:', toRaw(newVal));
            },
            { deep: true },
        );

        watch(
            twoWayBinding,
            newVal => {
                console.log('twoWayBinding changed:', toRaw(newVal));
            },
            { deep: true },
        );

        setTimeout(() => {
            twoWayBinding.value = 'changed after 2 seconds';
            selectedItems.value = [comboItems[2]]; // Change selected items after 2 seconds
        }, 2000);

        // setInterval(() => {
        //     console.log('🚀 ~ selected comboItems:', selectedItems.value);
        // }, 1000);

        const handleChange = event => {
            console.log('🚀 ~ event:', event);

            // inputValue.value = event.detail?.value ?? event.target.value;
        };

        const comboChange = event => {
            console.log('🚀 ~ comboChange event:', event);
        };

        return {
            inputValue,
            twoWayBinding,
            handleChange,
            selectedItems,
            comboItems,
            comboChange,
            sliderValue,
            dropDownValue,
        };
    },
});
</script>

<template>
    <h1>Hello World</h1>
    <PdAlert>test</PdAlert>
    <PdInput :value="inputValue" @pd-change="handleChange" />
    <PdInput v-model="twoWayBinding" />
    <PdCombobox :items="comboItems" @pd-change="comboChange" multiselect />
    <hr />
    <PdCombobox :items="comboItems" v-model.lazy="selectedItems" multiselect />
    <hr />
    <PdSlider v-model="sliderValue" :min="0" :max="100" />
    <hr />
    <PdDropdown v-model.lazy="dropDownValue" :items="comboItems" />
</template>
