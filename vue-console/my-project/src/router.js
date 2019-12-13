/*import Vue from "vue"; // importamos la instancia de vue dentro del router
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
});*/
import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "coin/:id",
      name: "coin-deta",
      component: CoinDetail
    },

    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
