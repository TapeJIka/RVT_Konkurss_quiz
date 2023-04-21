import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('../views/Question_page.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('../views/Quiz.vue')
    }
  ]
})

export default router
