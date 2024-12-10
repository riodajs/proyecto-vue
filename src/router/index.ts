import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../modules/counter/components/Contador.vue'),
    },
    {
      path: '/taskslist',
      name: 'taskslist',
      component: () => import('../modules/taskslist/components/TasksList.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../modules/register/views/RegisterView.vue'),
    },
  ],
})

export default router
