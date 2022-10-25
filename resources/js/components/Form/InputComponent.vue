<template>
    <a-input-password
        v-if="type === 'password'"
        v-model:value="value"
        @input="onInput"
        :placeholder="placeholder"
    />
    <a-input-number
        v-if="type === 'number'"
        style="width: 100%"
        :precision="afterDotNumbers"
        v-model:value="value"
        @change="onNumberInput"
        :placeholder="placeholder"
    />
    <a-radio-group
        v-if="type === 'radio'"
        v-model:value="value"
        @change="onInput"
        :options="options"
    />
    <a-date-picker
        v-if="type === 'date'"
        style="width: 100%"
        v-model:value="value"
        @change="onInputDate"
    />
    <a-textarea
        v-if="type === 'textarea'"
        v-model:value="value"
        @input="onInput"
        :placeholder="placeholder"
    />
    <a-input
        v-if="type === 'text'"
        v-model:value="value"
        @input="onInput"
        :placeholder="placeholder"
    />
</template>

<script>

export default {
    name: "InputComponent",
    emits: ['input'],
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            required: false,
            type: [String, Number, Object]
        },
        placeholder: {
            type: String,
            default: '',
        },
        field: {
            required: true,
            type: String,
        },
        afterDotNumbers: {
            type: Number,
            default: 0,
        },
        options: {
            type: Array,
            default: [],
        },
    },
    data: () => ({
    }),
    methods: {
        onInput(e) {
            this.$emit('input', {value: e.target.value, field: this.field});
        },
        onNumberInput(val) {
            this.$emit('input', {value: val, field: this.field});
        },
        onInputDate(e, dateString) {
            this.$emit('input', {value: e, field: this.field});
        }
    }
}
</script>

<style scoped>

</style>
