import {
    createWebHashHistory,
    createRouter
} from 'vue-router'
import home from './views/home.vue'
import introduce from './views/introduce.vue'
import button from './components/button.vue'
import form from './components/form.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path:'/',component:introduce
        },
        {
            path: '/home',
            component: home,
            children: [
                {
                    path: '',
                    component: button
                },
                {
                    path: 'form',
                    component: form
                }
            ]
        },
    ]
})

export default router