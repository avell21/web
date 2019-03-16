import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");