import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import mychows from '../views/mychows.vue'
Vue.use(VueRouter)



let routes = [
    
  
  { path: '/', component: Home },
  { path : "/mychows" , component : mychows}
    
   ]
   
   const router = new VueRouter({
       mode: 'history',
     routes // short for `routes: routes`
   })


export default router
