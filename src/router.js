import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./components/Dashboard.vue')
            },{
                path: '/import',
                name: 'import',
                component: () => import('./components/Import.vue')
            },
           
          
        ]
    },
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
