import Vue from 'vue'
import Router from 'vue-router'
import compontentIndex from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: compontentIndex
    },{
      path: '/banana',
      name: 'HelloWorld',
      component: compontentIndex
    }
  ]
})
