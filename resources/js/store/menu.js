export default {
    state: () => ({
        menuItems: [
            {id: 1, name: 'DB', label: 'Вывод БД', iconName: 'database', path: '/db'},
            {
                id: 2,
                name: 'Form',
                label: 'Генератор форм',
                iconName: 'form',
                path: '/form',
                // children: [
                //     {id: 3, name: 'About', label: 'О нас'},
                //     {id: 4, name: 'Contacts', label: 'Контакты'},
                // ]
            },
            {id: 5, name: 'Excel', label: 'Выгрузка в excel', iconName: 'excel', path: '/export/excel'},
            {id: 6, name: 'Word', label: 'Выгрузка в word', iconName: 'word', path: '/export/word'},
        ],
    }),
    getters: {
        menuItems(state) {
            return state.menuItems;
        }
    },
    actions: {},
    mutations: {},
}
