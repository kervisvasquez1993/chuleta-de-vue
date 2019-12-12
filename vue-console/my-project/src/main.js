import Vue from "vue"; // importa la libreria que bajamos con npm
import App from "./App.vue"; // importamos el componente app
import "@/assets/css/tailwind.css";
import router from "@/router";
Vue.config.productionTip = false;

// instancia de vue
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
