import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Regist from '@/components/Regist'
import Home from '@/components/Home'
import Match from '@/components/Match'
import List from '@/components/List'
import Info from '@/components/Info'
// import Login from '@/components/Login'

// lazy 
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/Login',
      name: '登录',
      component: Login
    },
    {
      path: '/Regist',
      name: '注册',
      component: Regist 
    }
    ,
    {
      path: '/Home',
      name: '主页',
      component: Home
    },
    {
      path: '/Match',
      name: '配对',
      component: Match
    },
    {
      path: '/list',
      name: '已配对列表',
      component: List
    },
    {
      path: '/info',
      name:'个人信息',
      component: Info
    },
    {
      path: '/hello',
      name: 'hellodemo',
      component: HelloWorld
    }
  ]
})


// router.beforeEach((to, from, next) => {  
//   if (to.path.startsWith('/Regist')){
//     next()
//   }
//   else if (to.path.startsWith('/login')) {  
//       window.sessionStorage.removeItem('access-token')  
//       next()  
//   } else {  
//       let token = window.sessionStorage.getItem('access-token')  
//       if (!token) {  
//           next({ path: '/login' })  
//       } else {  
//           next()  
//       }  
//   }  
// })

export default router