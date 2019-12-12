/*import Vue from "vue"; // importa la libreria que bajamos con npm
import App from "./App.vue"; // importamos el componente app
import "@/assets/css/tailwind.css";
import router from "@/router";
Vue.config.productionTip = false;

// instancia de vue
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");*/
import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/router";
import { dollarFilter, percerfilter } from "@/filter";
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percerfilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
