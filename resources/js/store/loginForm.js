/**
 * поле ввода
 * @defaultItem
 * @var id идентификатор поля
 * @var name имя поля которое будет отправляться на сервер
 * @var label
 * @var type тип поля (text, password, number, checkbox и т.д.)
 * @var model переменная в которой будет хранится значение
 * @var rules правила валидации массив с правилами
 * [{required: true, message: 'Поле обязательное'}, {max: 10, message: 'max 10'}]
 * [ len, max, min, message, required, type,
 * pattern, // regExp
 * trigger, // [change, blur] условие срабатывания
 * validator, // колбэк валидации
 * ]
 *
 * @type {{name: string, model: string, rules: [{}], id: number, type: string}}
 */

const fieldsMap = [
    [
        {
            id: 1,
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
            id: 2,
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
    ]
];


const formConfig = {
    name: 'loginForm',
    dataMap: {
        email: '',
        password: '',
    },
    fieldsMap,
}
