import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuesax from 'vuesax'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
