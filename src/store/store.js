import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    nextSteps: "",
  },
  // state cannot be manipulated except by using 'mutations':
  mutations: {
    change(state, nextSteps) {
      state.nextSteps = nextSteps;
    },
  },
  // 'getters' are used to have a look into the state:
  getters: {
    nextSteps: (state) => state.nextSteps, // 'state' as parameter, returning 'state.nextSteps'
  },
});
