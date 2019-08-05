

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
;
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueAxios, axios)



Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app', require('./components/App.vue').default);



import App from './components/App'
import Home from './components/Home'
import Register from './components/auth/Register.vue';
import Login from './components/auth/Login.vue';
import Dashboard from './components/Dashboard.vue';





const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register,

        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                auth: true
            }
        },

    ],
});

Vue.router = router;
//websanova/vue-auth
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

const app = new Vue({
    el: '#app',
    components: { App },
     router,

});
