import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#fbc500',
        secondary: '#0D1318',
        n2wgray: '#1B2636',
        n2wblue: '#203E68',
        n2wlightgray: '#BDBDBD',
        n2wwhite: '#F2F2F2',
      },
    },
  },
});
