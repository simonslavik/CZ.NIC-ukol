import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/registry',
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('@/views/DomainDetailView.vue'),
    },
  ],
})

export default router
