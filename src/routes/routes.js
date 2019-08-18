import VueRouter from 'vue-router';

//路由懒加载方式
const home=() => import('../components/home.vue');
const main=() => import('../components/main.vue');
const axiosTest1=() => import('../components/axiosTest.vue');
const axiosTest2=() => import('../components/axiosTest2.vue');

export default new  VueRouter({
  routes :[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/main/:id',
      component:main,
      redirect: '/main/:id/axiosTest1',
      children: [
        { path: 'axiosTest1', component: axiosTest1 },
        { path: 'axiosTest2', component: axiosTest2 }

        
      ]
    }
  ]
})
