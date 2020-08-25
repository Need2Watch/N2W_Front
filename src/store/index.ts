import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import loggedUser from './modules/loggedUser.store';
import movies from './modules/movies.store';
import currentMovie from './modules/currentMovie.store';
import scheduledEvents from './modules/scheduledEvents.store';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    loggedUser,
    movies,
    currentMovie,
    scheduledEvents,
  },
  plugins: [vuexLocal.plugin],
});
