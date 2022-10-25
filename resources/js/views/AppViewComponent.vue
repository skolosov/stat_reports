<template>
    <a-config-provider :locale="locale">
        <menu-component />
        <template v-if="!showLayout">
            <layout-component>
                <router-view/>
            </layout-component>
        </template>
        <template v-else>
            <router-view/>
        </template>
    </a-config-provider>
</template>
<script>
import LayoutComponent from "./LayoutComponent.vue";
import ruRU from 'ant-design-vue/es/locale/ru_RU.js';
import MenuComponent from "@components/MenuComponent.vue";

export default {
    name: 'AppViewComponent',
    components: {
        LayoutComponent,
        MenuComponent,
    },
    data: () => ({
        auth: false,
        locale: ruRU,
    }),
    computed: {
        path() {
            return this.$route.path;
        },
        showLayout() {
            return ['/sign-in', '/reg', '/'].includes(this.path);
        },
    },
    mounted() {
        console.log('app', this.$route);
    }
};
</script>
<style lang="scss">

</style>
