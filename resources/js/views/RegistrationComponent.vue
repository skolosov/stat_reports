<template>
    <div class="container">
        <form-component @finish="submitCallback" :form-config="formConfig"/>
    </div>
</template>

<script>
import {message} from 'ant-design-vue';
import FormComponent from "@components/Form/FormComponent.vue";

export default {
    name: "RegistrationComponent",
    data: () => ({
        formConfig: {
            name: 'registration',
            title: 'Регистрация',
            direction: 'horizontal',
            dataMap: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            buttons: [
                {
                    key: 'btn_1',
                    name: 'enter',
                    title: 'Отправить',
                    type: 'submit',
                }
            ],
            fieldsMap: [
                {
                    key: 1,
                    type: 'text',
                    name: 'name',
                    label: 'ФИО',
                    model: 'name',
                    span: 12,
                    placeholder: 'Введите ФИО',
                    rules: [
                        {
                            required: true,
                            message: `Поле должно быть заполнено`
                        },
                    ],
                },
                {
                    key: 2,
                    type: 'text',
                    name: 'email',
                    label: 'Электронная почта',
                    model: 'email',
                    span: 12,
                    placeholder: 'Введите email',
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
                    key: 3,
                    type: 'password',
                    name: 'password',
                    label: 'Пароль',
                    model: 'password',
                    placeholder: 'Введите пароль',
                    span: 12,
                    rules: [
                        {
                            required: true,
                            validator: (formValues, _rules, value) => {
                                if (value === '') {
                                    return Promise.reject('Введите пароль');
                                }
                                return Promise.resolve();
                            },
                            trigger: 'blur',
                        },
                    ]
                },
                {
                    key: 4,
                    type: 'password',
                    name: 'password_confirmation',
                    label: 'Повторите пароль',
                    model: 'confirmPassword',
                    placeholder: 'Повторите пароль',
                    span: 12,
                    rules: [
                        {
                            required: true,
                            message: `Поле должно быть заполнено`,
                        },
                        {
                            validator: (formValues, _rules, value) => {
                                if (value === '') {
                                    return Promise.reject('Введите повторно пароль');
                                }
                                if (value !== formValues.password) {
                                    return Promise.reject('Пароли не совпадают!');
                                }
                                return Promise.resolve();
                            },
                            trigger: 'blur',
                        },
                    ]
                },
            ],
        }
    }),
    components: {
        FormComponent,
    },
    methods: {
        submitCallback(props) {
            message.loading({
                content: 'Сохранение пользователя',
                key: 1,
            });

            axios.post('/api/register', props)
                .then((response) => {
                    message.success({
                        content: 'Пользователь сохранен',
                        key: 1,
                    });
                })
                .catch((err) => {
                    console.log('err ', err);
                    message.error({
                        content: err.response.data.message,
                        key: 1,
                    });
                });
        },
    }
}
</script>

<style scoped>

</style>
