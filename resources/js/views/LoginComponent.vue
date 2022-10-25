<template>
    <div class="container">
        <form-component :form-config="formConfig"/>
    </div>
</template>

<script>
import FormComponent from "@components/Form/FormComponent.vue";

export default {
    name: "LoginComponent",
    data: () => ({
        formConfig: {
            name: 'loginForm',
            title: 'Вход',
            direction: 'horizontal',
            dataMap: {
                email: '',
                password: '',
            },
            buttons: [
                {
                    key: 'btn_1',
                    name: 'enter',
                    title: 'Вход',
                    type: 'submit',
                }
            ],
            fieldsMap: [
                {
                    key: 1,
                    type: 'text',
                    name: 'email',
                    label: 'Электронная почта',
                    model: 'email',
                    span: 12,
                    placeholder: '',
                    rules: [
                        {
                            required: true,
                            message: `Поле должно быть заполнено`
                        },
                        {
                            type: 'email',
                            message: `Поле должно быть формата "email@test.ru"`
                        }
                    ]
                },
                {
                    key: 2,
                    type: 'password',
                    name: 'password',
                    label: 'Пароль',
                    model: 'password',
                    span: 12,
                    rules: [
                        {
                            required: true,
                            message: `Поле должно быть заполнено`
                        },
                    ]
                },
            ],
        }
    }),
    components: {
        FormComponent,
    },
}
</script>

<style scoped>

</style>
