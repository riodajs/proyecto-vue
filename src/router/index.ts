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
      component: () => import('../components/Contador.vue'),
    },
    {
      path: '/taskslist',
      name: 'taskslist',
      component: () => import('../components/TasksList.vue'),
    },
  ],
})

export default router
