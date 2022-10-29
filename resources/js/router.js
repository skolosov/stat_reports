import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";
import DatabasePage from "@pages/DatabasePage.vue";
import ExcelExportPage from "@pages/ExcelExportPage.vue";
import FormPage from "@pages/FormPage.vue";
import WordExportPage from "@pages/WordExportPage.vue";
import LoginComponent from "@views/LoginComponent.vue";
import RegistrationComponent from "@views/RegistrationComponent.vue"
import Auth from "./Auth.js";


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
    {path: '/sign-in', name: 'SignIn', component: LoginComponent, meta: {requiresAuth: false}},
    {path: '/reg', name: 'Registration', component: RegistrationComponent, meta: {requiresAuth: false}},
    {path: '/db', name: 'DB', component: DatabasePage, meta: {requiresAuth: true}},
    {path: '/form', name: 'Form', component: FormPage, meta: {requiresAuth: true}},
    {path: '/export/excel', name: 'Excel', component: ExcelExportPage, meta: {requiresAuth: true}},
    {path: '/export/word', name: 'Word', component: WordExportPage, meta: {requiresAuth: true}},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: {requiresAuth: false}},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (Auth.check()) {
            next();
            return;
        } else {
            router.push('/login');
        }
    } else {
        next();
    }
});

export default router;
