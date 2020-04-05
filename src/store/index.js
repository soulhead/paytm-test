import Vue from 'vue'
import Vuex from 'vuex'

// Store modules
import reports from './modules/reports'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reports: reports()
  }
})
