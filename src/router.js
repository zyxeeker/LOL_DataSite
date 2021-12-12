// Vue Router 4
import {createRouter, createWebHashHistory} from "vue-router";
import {ChampionDetail, Nav} from '@/page/index.js'

export default createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        // redirect: '/home',
        component: Nav
    }, {
        path: '/patch',
        name: 'patch',
    }, {
        path: '/rune',
        name: 'rune',
    }, {
        path: '/champion',
        // name: 'champion',
        component: ChampionDetail
    }, {
        path: '/item',
        name: 'item',
    }]
});