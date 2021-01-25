import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Mine = () => import('../views/Mine.vue')
const ShopCart = () => import('../views/ShopCart.vue')
const Category = () => import('../views/Category.vue')

// Detail
const Detail = () => import('../views/Detail/Detail.vue')
// goods_list
const GoodsList = () => import('../views/goods_list/GoodsList.vue')

// address
const AddressList = () => import('../views/address/AddressList.vue')
const AddressEditor = () => import('../views/address/AddressEditor.vue')

// order
const AddOrder = () => import('../views/order/AddOrder.vue')
const MyOrder = () => import('../views/order/MyOrder.vue')
// login
const Login = () => import('../views/login/Login.vue')

// my
const About = () => import('../components/my/About.vue')
const User = () => import('../components/my/User.vue')

// 消除重复重定向警报
const originalReplace = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/detail/:id',
    component: Detail,
    props: true,
    meta: { isPublic: true }
  },
  {
    path: '/shop',
    component: ShopCart
  },
  {
    path: '/category',
    component: Category,
    meta: { isPublic: true }
  },
  {
    path: '/home',
    component: Home,
    meta: { isPublic: true }
  },
  {
    path: '/address-list',
    component: AddressList
  },
  {
    path: '/address-list/:id',
    component: AddressList,
    props: true
  },
  {
    path: '/address-ditor',
    component: AddressEditor
  },
  {
    path: '/address-ditor/:id',
    component: AddressEditor,
    props: true
  },
  {
    path: '/address-ditor/:num',
    name: 'yes',
    component: AddressEditor,
    props: true
  },
  {
    path: '/address-ditor/:id/:num',
    component: AddressEditor,
    props: true
  },
  {
    path: '/goods_list/:id',
    component: GoodsList,
    props: true,
    meta: { isPublic: true }
  }, {
    path: '/add_submit',
    component: AddOrder
  }, {
    path: '/my_order',
    component: MyOrder
  }, {
    path: '/my_about',
    component: About
  }, {
    path: '/login',
    component: Login,
    meta: { isPublic: true }
  }, {
    path: '/user',
    component: User
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    Vue.prototype.$toast.fail('请登录')
    return next('/login')
  }
  return next()
})

export default router
