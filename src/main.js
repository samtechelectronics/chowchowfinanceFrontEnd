import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from './router'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import vuetify from './plugins/vuetify';
Vue.use(VueToast , {position : 'top-right'});
Vue.config.productionTip = false
Vue.component('navbar', require('./components/navbar.vue').default);
Vue.component('loader', require('./views/loader.vue').default);
Vue.component('chowBreedModal', require('./components/chowBreedModal.vue').default);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
