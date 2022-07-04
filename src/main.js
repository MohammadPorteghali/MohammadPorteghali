import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

Vue.use(AOS);

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
