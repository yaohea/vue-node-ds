import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home_search" */ '../views/Home.vue')
const search = () => import(/* webpackChunkName: "Home_search" */ '../views/search/search.vue')

const Mine = () => import(/* webpackChunkName: "Mine_About_User" */ '../views/Mine.vue')
const ShopCart = () => import(/* webpackChunkName: "ShopCart" */ '../views/ShopCart.vue')
const Category = () => import(/* webpackChunkName: "Category_GoodsList" */ '../views/Category.vue')

// Detail
const Detail = () => import(/* webpackChunkName: "Detail" */ '../views/Detail/Detail.vue')
// goods_list
const GoodsList = () => import(/* webpackChunkName: "Category_GoodsList" */ '../views/goods_list/GoodsList.vue')

// address
const AddressList = () => import(/* webpackChunkName: "AddressList_AddressEditor" */ '../views/address/AddressList.vue')
const AddressEditor = () => import(/* webpackChunkName: "AddressList_AddressEditor" */ '../views/address/AddressEditor.vue')

// order
const AddOrder = () => import(/* webpackChunkName: "AddOrder_MyOrder" */ '../views/order/AddOrder.vue')
const MyOrder = () => import(/* webpackChunkName: "AddOrder_MyOrder" */ '../views/order/MyOrder.vue')
// login
const Login = () => import(/* webpackChunkName: "Login" */ '../views/login/Login.vue')

// my
const About = () => import(/* webpackChunkName: "Mine_About_User" */ '../components/my/About.vue')
const User = () => import(/* webpackChunkName: "Mine_About_User" */ '../components/my/User.vue')

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
    meta: { isPublic: true, keepAlive: true }
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
  }, {
    path: '/search',
    component: search
  }
]

const router = new VueRouter({
  mode: 'history',
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
