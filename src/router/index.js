import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/auth/SignupView.vue'
import LoginView from '../views/auth/LoginView.vue'
import NotFound from '../views/NotFound.vue'
import UserView from '../views/user/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/auth/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound ',
    component: NotFound
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
