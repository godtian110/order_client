import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: () => import('../views/WelcomeView.vue')
      }
    ],
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/',
    redirect: '/login',
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 从哪个路径跳转而来
  // next 是一个函数，表示放行
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login')
  next()
})

export default router
