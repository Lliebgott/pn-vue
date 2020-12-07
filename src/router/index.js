import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Home'
import LibraryIndex from '../components/library/LibraryIndex'
import LeftMenu from '../components/admin/LeftMenu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
        },
        {
          path: '/admin',
          name: 'Admin',
          component: LeftMenu
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
