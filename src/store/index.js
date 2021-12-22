import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dbData:{},
    dbAllData:{},
    hightestTemp: "60",
    lowestTemp: "40",
    hightestHum: "70",
    lowestHum: "20",
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
