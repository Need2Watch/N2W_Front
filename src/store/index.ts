import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import loggedUser from './modules/loggedUserModule.store';
import movies from './modules/moviesModule.store';
import currentMovie from './modules/currentMovieModule.store';
import scheduledEvents from './modules/scheduledEventsModule.store';

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
