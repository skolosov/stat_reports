import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";
import DatabasePage from "@pages/DatabasePage.vue";
import ExcelExportPage from "@pages/ExcelExportPage.vue";
import FormPage from "@pages/FormPage.vue";
import WordExportPage from "@pages/WordExportPage.vue";
import LoginComponent from "@views/LoginComponent.vue";
import RegistrationComponent from "@views/RegistrationComponent.vue"


const Home = {template: '<div>Home</div>'};
// const Login = {template: '<div>Login</div>'};
// const Registration = {template: '<div>Registration</div>'};
const NotFound = {template: '<div>404</div>'};
// const DB = {template: '<div>DB</div>'};
// const Form = {template: '<div>Form</div>'};
// const Excel = {template: '<div>Excel</div>'};
// const Word = {template: '<div>Word</div>'};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        //redirect: {name: 'DB'}
        // redirect: (to) => {
        //     return {
        //         path: '/db',
        //         // query: {
        //         //     q: to.params.searchText
        //         // }
        //     }
        // },
    },
    {path: '/sign-in', name: 'SignIn', component: LoginComponent},
    {path: '/reg', name: 'Registration', component: RegistrationComponent},
    {path: '/db', name: 'DB', component: DatabasePage},
    {path: '/form', name: 'Form', component: FormPage},
    {path: '/export/excel', name: 'Excel', component: ExcelExportPage},
    {path: '/export/word', name: 'Word', component: WordExportPage},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
