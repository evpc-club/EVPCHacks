// Vue
import Vue from "vue";
import App from "./App.vue";

// Router
import router from "./router";

// Vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(Vuesax, {
  // TODO: options
})


