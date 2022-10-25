<template>
    <a-menu
        mode="horizontal"
        :selectable="false"
        :style="{justifyContent: 'flex-end'}"
        theme="dark"
    >
        <a-menu-item @click="onClickMenuBtn('SignIn')" key="sign-in">
            Войти
        </a-menu-item>
        <a-menu-item @click="onClickMenuBtn('Registration')" key="reg">
            Регистрация
        </a-menu-item>
        <a-menu-item @click="onClickMenuBtn('Logout')" key="logout">
            Выйти
        </a-menu-item>
    </a-menu>
</template>
<script>
export default {
    name: 'MenuComponent',
    data: () => ({}),
    methods: {
        onClickMenuBtn(name) {
            this.$router.push({name})
        }
    }

};
</script>
