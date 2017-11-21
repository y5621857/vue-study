import Vue from 'vue'
import Router from 'vue-router'
import compontentIndex from '@/pages/index'
import compontentDetail from '@/pages/detail'
import compontentAnalysis from '@/pages/detail/analysis'
import compontentCount from '@/pages/detail/count'
import compontentForeCast from '@/pages/detail/forecast'
import compontentPublish from '@/pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: compontentIndex
    },{
      path: '/detail',
      name: 'Detail',
      redirect:'/detail/count',
      component: compontentDetail,
      children:[
        {
          path: 'count',
          name: 'Count',
          component: compontentCount,
        },{
          path: 'forecast',
          name: 'ForeCast',
          component: compontentForeCast,
        },{
          path: 'analysis',
          name: 'Analysis',
          component: compontentAnalysis,
        },{
          path: 'publish',
          name: 'Publish',
          component: compontentPublish,
        },
      ]
    }
  ]
})
