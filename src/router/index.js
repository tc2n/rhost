import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import store from '../store'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home/:path',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]



const router = createRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path != '/') {
    if (store.state.islogged) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
})

export default router
