import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue')
  },

  {
    path: '/foo/:id',
    component: () => import('./views/Foo.vue'),
    props: route => ({ id: parseInt(route.params.id) })
  },

  {
    path: '/:path(.*)',
    component: () => import('./views/NotFound.vue')
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})
