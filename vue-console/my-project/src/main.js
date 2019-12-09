import Vue from "vue"; // importa la libreria que bajamos con npm
import App from "./App.vue"; // importamos el componente app
import '@assets/css/tailwind.css';

Vue.config.productionTip = false;

// instancia de vue
new Vue({
  render: h => h(App)
}).$mount("#app");
