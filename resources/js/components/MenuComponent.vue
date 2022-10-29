<template>
    <a-menu
        mode="horizontal"
        :selectable="false"
        :style="{justifyContent: 'flex-end'}"
        theme="dark"
    >
        <a-menu-item v-if="!checkAuth()" @click="onClickMenuBtn('SignIn')" key="sign-in">
            Войти
        </a-menu-item>
        <a-menu-item v-if="!checkAuth()" @click="onClickMenuBtn('Registration')" key="reg">
            Регистрация
        </a-menu-item>
        <a-menu-item v-if="checkAuth()" @click="onClickMenuBtn('Logout')" key="logout">
            Выйти
        </a-menu-item>
    </a-menu>
</template>
<script>
import Auth from "../Auth";

export default {
    name: 'MenuComponent',
    emits: ['SignIn', 'Registration', 'Logout'],
    data: () => ({}),
    methods: {
        checkAuth() {
            return Auth.check();
        },
        onClickMenuBtn(name) {
            this.$emit(name, name);
        }
    }

};
</script>
