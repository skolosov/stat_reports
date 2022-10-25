<template>
    <div :style="{display: 'inline-block'}">
        <img :src="path(iconName)" :alt="path" :style="style" id="icon"/>
    </div>
</template>

<script>
export default {
    name: "Icon",
    props: {
        iconName: String,
        size: Number,
    },
    methods: {
        path(iconName) {
            let iconPath = /.*\..*/.test(iconName)
                ? `../../images/${iconName}`
                : `../../images/${iconName}.svg`;
            return new URL(iconPath, import.meta.url).href
        },
    },
    computed: {
        style() {
            return {
                width: `${this.size || 20}px`,
                height: `${this.size || 20}px`,
            }
        },
    }

}
</script>

<style scoped>
#icon {
    width: 20px;
    height: 20px;
}
</style>
