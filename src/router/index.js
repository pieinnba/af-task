import { createRouter, createWebHistory } from 'vue-router'
import ContentMovie from '@/components/contentMovie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/movie',
    // },
    // {
    //   path: '/movie/:movieId',
    //   name: 'ContentMovie',
    //   component: ContentMovie
    // },
  ]
})

export default router