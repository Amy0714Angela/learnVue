// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //配置 store 选项，指定为 store 对象，会自动将 store 对象注入到所有子组件中，在子组件中通过 this.$store 访问该 store 对象
  components: { App },
  template: '<App/>'
})
