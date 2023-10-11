import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'首页',
    redirect:'/Squad/narva'
  },
  {
    path: '/squad',
    name: 'Squad',
    // meta: {name:'Squad地图', },
    // component: ()=> import('../components/test.vue'),
    children: [
      {
        path: '/Squad/Narva',
        name: 'Narva',
        component: ()=> import('../components/SquadMaps/Narva.vue'),
      },
      {
        path: '/Squad/Fallujah',
        name: 'Fallujah',
        component: ()=> import('../components/SquadMaps/Fallujah.vue'),
      },
    ]
  },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: () => import('../components/test.vue'),
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
