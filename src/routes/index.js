import { createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import MovieDetail from '../pages/MovieDetail.vue'
import ErrorPage from '../pages/ErrorPage.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'ErrorPage',
      component: ErrorPage
    }
  ]
})