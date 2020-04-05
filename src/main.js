import Vue from 'vue'
import dotenv from 'dotenv'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

dotenv.config()

// Adding Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import './styles/index.scss'
Vue.use(BootstrapVue)

// BrowserBreakpoints Plugin
import BrowserBreakpoints from './plugins/browserBreakpoints'
import BrowserBreakpointsMixin from './mixins/browserBreakpoints'

Vue.use(BrowserBreakpoints)
Vue.mixin(BrowserBreakpointsMixin)

import UserPreferences from './mixins/userPreferences'

Vue.mixin(UserPreferences)

// Initializing cookies
Vue.use(VueCookies)
Vue.$cookies.config('365d')
// Vue.$cookies.config('365d', '/', '', true)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
