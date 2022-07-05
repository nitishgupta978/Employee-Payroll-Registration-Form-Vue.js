import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import HelloWorld from './components/Form.vue'
import DisplayHome from './components/DisplayHome.vue'
import EditForm from './components/EditForm.vue'
const routes= [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    
    {
        path: '/helloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/displayHome',
        name: 'DisplayHome',
        component: DisplayHome
    },
    {
        path: '/editemployee/:id?',
        name: 'EditForm',
        component: EditForm
    },
   
];
const router = createRouter({
     history: createWebHistory(),
     routes
     })
     export default router