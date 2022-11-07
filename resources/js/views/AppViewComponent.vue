<template>
    <a-config-provider :locale="locale">
        <menu-component
            @SignIn="redirectToPage"
            @Registration="redirectToPage"
            @Logout="logout"
            :auth="auth"
        />
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
import Auth from "../Auth";
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'AppViewComponent',
    components: {
        LayoutComponent,
        MenuComponent,
    },
    data: () => ({
        locale: ruRU,
    }),
    computed: {
        ...mapGetters(['auth']),
        pathName() {
            return this.$route.name;
        },
        showLayout() {
            return ['SignIn', 'Registration', 'NotFound', 'Home'].includes(this.pathName);
        },
    },
    mounted() {
        console.log('app', this.$route);
    },
    methods: {
        ...mapActions(['setAuth']),
        redirectToPage(name) {
            this.$router.push({name});
        },
        logout() {
            axios.post('/api/logout')
                .then(() => {
                    Auth.logout(); //reset local storage
                    this.$router.push({name: 'SignIn'});
                    this.setAuth(false);
                })
                .catch((error) => {
                    console.log (error);
                });
        },
    }
};
</script>
<style lang="scss">

</style>
