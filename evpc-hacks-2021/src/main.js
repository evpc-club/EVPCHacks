// Vue
import Vue from "vue";
import App from "./App.vue";

// Router
import router from "./router";

// Vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

// Icons
import 'boxicons';
import 'boxicons/css/boxicons.min.css'

Vue.use(Vuesax, {
  
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");






