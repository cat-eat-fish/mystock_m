// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import "@/assets/css/base.css"

import "@/assets/js/rem.js"
// axios
import axios from "axios"
// axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios=axios;

// $http
import VueResource from 'vue-resource'; 
Vue.use(VueResource) 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
