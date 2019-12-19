import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'




// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

import SweetAlertIcons from 'vue-sweetalert-icons';
 
Vue.use(SweetAlertIcons);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
