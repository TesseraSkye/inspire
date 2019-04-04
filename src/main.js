// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// @ts-ignore
new Vue({
  router,
  store,
  mounted() {//this logic runs at application start
    store.dispatch("getLocalName")
    store.dispatch('getData')
    store.dispatch("initDate")
  },
  render: function (h) { return h(App) }
}).$mount('#app')
