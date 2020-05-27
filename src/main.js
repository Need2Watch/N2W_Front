import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Vuesax from 'vuesax';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuesax/dist/vuesax.css';
import store from './store';

Vue.use(Vuesax);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
