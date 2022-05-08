import { createRouter, createWebHistory } from 'vue-router'
import TheLayOutVue from '@/components/TheLayOut/TheLayOut.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: TheLayOutVue,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home/HomeView.vue'),
        },
        {
          path: '/works',
          name: 'works',
          component: () => import('@/views/Works/WorksView.vue'),
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('@/views/Blog/BlogView.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/views/Contact/ContactView.vue'),
        },
      ],
    },
  ],
})

export default router
