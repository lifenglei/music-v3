import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index'),
    children: [{
        path: '/recommend',
        name: 'recommend',
        component: () => import('../views/recommend/index')
      },
      {
        path: '/singer',
        name: 'singer',
        component: () => import('../views/singer/index'),
      },
    ],
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/index')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router