import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "front-end-debug";
// import "front-end-debug/src/scss/front-end-debug.scss";

import "bootstrap";

// Install BootstrapVue
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

import "./styles/app.scss";

Vue.config.productionTip = false;

// This is the Root View
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
