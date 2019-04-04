import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Dashboard from './views/Dashboard.vue'
// @ts-ignore
import Todos from './views/Todos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: { transitionType: 'slide-up' }
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos,
      meta: { transitionType: 'slide-down' }
    }
  ]
})
