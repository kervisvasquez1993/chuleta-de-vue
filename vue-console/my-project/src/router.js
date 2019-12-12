import Vue from "vue"; // importamos la instancia de vue dentro del router
import Router from "vue-router";
import Home from "@/views/Home"; // importamos el componente

Vue.use(Router);

export default new Router({
  //configuracion de las rutas
  mode: "history", // usa el history mode de html
  routes: [
    {
      path: "/",
      name: "home",
      components: Home
    }
  ]
});
