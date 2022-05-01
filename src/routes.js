import { createRouter, createWebHistory} from 'vue-router'

import Home from './components/Pages/Home';
import Links from './components/Pages/Links';
import Settings from './components/Pages/Settings';
import Info from './components/Pages/Info';
import notFound from './components/Pages/notFound';

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/links', component: Links },
        { path: '/settings', component: Settings },
        { path: '/info', component: Info },
        { path: '/:catchAll(.*)', component: notFound },
    ]
})

export default routes;