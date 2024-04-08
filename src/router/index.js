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
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    redirect:'/welcome',
    children:[
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('../views/WelcomeView.vue'),
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('../views/TestView.vue')
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('../views/OrderView.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/UserView.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/home',
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
  if (to.path === '/register') return next();
  if (to.path === '/welcome') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login')
  next()
})

export default router
