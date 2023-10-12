import Vue from 'vue'
import App from './App'
import router from './router'
// require('./assets/app.css')
require('./assets/style.css')

//      , App.vue , router->index.js 
// index.html을 렌더링 하기 위해서 위에 import가 필요함 
// 이과정을 main.js가 진행 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

