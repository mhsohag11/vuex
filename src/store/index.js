import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations : [],
    users : [
      { id : 1 , name : "MH Sohag" , registered : false },
      { id : 2 , name : "Sharif" , registered : false },
    ],
  },
  mutations,
  actions,
  getters
})
