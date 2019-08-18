import Vue from 'vue'
import App from './App.vue'
//vant
import { Loading,NavBar, Button,Cell, CellGroup,Dialog  } from 'vant';
Vue.use(Loading).use(NavBar).use(Button).use(Cell).use(CellGroup).use(Dialog);
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './routes/routes.js'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
