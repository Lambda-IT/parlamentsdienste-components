<script lang="ts">
import {
    PdAlert,
    PdButton,
    PdCheckbox,
    PdCombobox,
    PdDatepicker,
    PdDropdown,
    PdInput,
    PdRadio,
    PdRadioGroup,
    PdSlider,
    PdTextarea,
} from '@parlamentsdienste-components/vue';
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
    components: {
        PdAlert,
        PdInput,
        PdCombobox,
        PdSlider,
        PdDropdown,
        PdCheckbox,
        PdRadioGroup,
        PdRadio,
        PdDatepicker,
        PdTextarea,
        PdButton,
    },
    setup() {
        const input = ref('Some text...');
        const inputDisabled = ref(false);
        const dropdown = ref(comboItems[5]);
        const comboboxSelectable = ref(comboItems[2]);
        const comboboxMultiselect = ref(comboItems.slice(0, 2));
        const date = ref('2025-07-23');
        const checkbox = ref(true);
        const radio = ref('3');
        const slider = ref(50);
        const textarea = ref('start Text textarea');

        // setTimeout(() => {
        //     dropdown.value = comboItems[1];
        //     comboboxMultiselect.value = comboItems.slice(2, 4);
        //     textarea.value = 'new text';
        //     input.value = 'new input value';
        //     slider.value = 60;
        // }, 2000);

        // Watchers for all ref variables
        watch(input, val => console.log('input changed:', toRaw(val)));
        watch(dropdown, val => console.log('dropdown changed:', toRaw(val)));
        watch(comboboxSelectable, val => console.log('comboboxSelectable changed:', toRaw(val)));
        watch(comboboxMultiselect, val => console.log('comboboxMultiselect changed:', toRaw(val)));
        watch(date, val => console.log('date changed:', toRaw(val)));
        watch(checkbox, val => console.log('checkbox changed:', toRaw(val)));
        watch(radio, val => console.log('radio changed:', toRaw(val)));
        watch(slider, val => console.log('slider changed:', toRaw(val)));
        watch(textarea, val => console.log('textarea changed:', toRaw(val)));

        const buttonClicked = () => {
            console.log('Button clicked');
            inputDisabled.value = true;
        };

        return {
            input,
            inputDisabled,
            dropdown,
            comboboxSelectable,
            comboboxMultiselect,
            date,
            checkbox,
            radio,
            slider,
            textarea,
            comboItems,
            buttonClicked,
        };
    },
});
</script>

<template>
    <div class="wrapper">
        <h1>Parlamentsdienste Components</h1>
        <h2>Vue Test Page</h2>
        <form @submit.prevent>
            <PdInput label="pd-input" v-model="input" :disabled="inputDisabled" data-test="pd-input" />
            <PdDropdown label="pd-dropdown" empty-item :items="comboItems" v-model="dropdown" data-test="pd-dropdown" />
            <PdCombobox
                label="pd-combobox selectable"
                :items="comboItems"
                selectable
                v-model="comboboxSelectable"
                data-test="pd-combobox-selectable" />
            <PdCombobox
                label="pd-combobox multiselect"
                :items="comboItems"
                multiselect
                empty-item
                v-model="comboboxMultiselect"
                data-test="pd-combobox-multiselect" />
            <!-- !!! PdDatepicker
                Because the datepicker emits an object { selectedDates: Date[]; dateStr: string }
                the vmodel is not quite compatible 
                -->
            <PdDatepicker
                label="pd-datepicker"
                v-model="date"
                data-test="pd-datepicker"
                @pd-change="(d:any) => {date = d.detail.dateStr}" />
            <PdCheckbox text="pd-checkbox" v-model="checkbox" data-test="pd-checkbox" />
            <PdRadioGroup name="radio-group-1" v-model="radio" data-test="pd-radio-group">
                <PdRadio value="1" label="Radio 1" name="tom" data-test="pd-radio-1" />
                <PdRadio value="2" label="Radio 2" data-test="pd-radio-2" />
                <PdRadio value="3" label="Radio 3" data-test="pd-radio-3" />
            </PdRadioGroup>
            <PdSlider v-model="slider" data-test="pd-slider" />
            <PdTextarea label="pd-textarea" v-model="textarea" auto-grow data-test="pd-textarea" />
            <PdButton @click="buttonClicked" data-test="pd-button">pd-button</PdButton>
        </form>
    </div>
</template>

<style scoped>
.wrapper {
    max-width: 25rem;
    margin: 5rem auto;
}
h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
}
h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
}
form > * {
    margin-bottom: 1rem;
}
</style>
