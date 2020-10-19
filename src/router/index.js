import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Anzhuang from '@/page/Anzhuang'
import Paper from '@/page/Paper'
import Shpper from '@/page/Shpper'
import Food from '@/page/Food'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/Layout'
        },
        {
            path: '/Layout',
            name: 'Layout',
            component: Layout,
            children: [

                { path: '/Anzhuang', name: 'Anzhang', component: Anzhuang, },
                { path: '/paper', name: 'paper', component: Paper },
                { path: '/shpper', name: 'shpper', component: Shpper },
                { path: '/food', name: 'food', component: Food },

            ]
        }
    ]

})