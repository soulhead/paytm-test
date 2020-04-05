import Vue from 'vue'
import Router from 'vue-router'
import ExpenseReport from './views/ExpenseReport.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'expenseReport',
      component: ExpenseReport
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "view-user-prefs" */ './views/UserPreferences.vue')
    },
    {
      path: '*',
      component: ExpenseReport
    }
  ]
})
