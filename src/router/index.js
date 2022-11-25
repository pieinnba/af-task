import { createRouter, createWebHistory } from 'vue-router'
import ListMovie from '@/components/listMovie.vue'
import ContentMovie from '@/components/contentMovie.vue'
import Error from '@/views/error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/movie',
    },
    {
      path: '/movie',
      name: 'ListMovie',
      component: ListMovie
    },
    {
      path: '/movie/:movieId',
      name: 'ContentMovie',
      component: ContentMovie
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'Error', 
      component: Error 
    }
  ]
})

export default router