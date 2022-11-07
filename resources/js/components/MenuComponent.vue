<template>
    <a-menu
        mode="horizontal"
        :selectable="false"
        :style="{justifyContent: 'flex-end'}"
        theme="dark"
    >
        <a-menu-item v-if="!auth" @click="onClickMenuBtn('SignIn')" key="sign-in">
            Войти
        </a-menu-item>
        <a-menu-item v-if="!auth" @click="onClickMenuBtn('Registration')" key="reg">
            Регистрация
        </a-menu-item>
        <a-menu-item v-if="auth" @click="onClickMenuBtn('Logout')" key="logout">
            Выйти
        </a-menu-item>
    </a-menu>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
    name: 'MenuComponent',
    emits: ['SignIn', 'Registration', 'Logout'],
    computed: {
        ...mapGetters(['auth']),
    },
    methods: {
        onClickMenuBtn(name) {
            this.$emit(name, name);
        }
    }

};
</script>
