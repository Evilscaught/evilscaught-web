import Vuex from "vuex";
import Vue from "vue";

import photos from "./modules/photos";
import todos from "./modules/todos";
import employees from "./modules/employees";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    photos,
    todos,
    employees,
  },
});
