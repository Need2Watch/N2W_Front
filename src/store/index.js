import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import loggedUser from './modules/loggedUser';
import movies from './modules/movies';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    loggedUser,
    movies,
  },
  state: {
    currentMovie: {},
    scheduledEvents: {},
  },
  mutations: {
    loadMovie(state, payload) {
      state.currentMovie = payload;
    },
    followMovie(state) {
      state.currentMovie.following = !state.currentMovie.following;
    },
    watchMovie(state) {
      state.currentMovie.watched = !state.currentMovie.watched;
    },
    scheduleEvents(state, payload) {
      state.scheduledEvents = payload;
    },
  },
  plugins: [vuexLocal.plugin],
});
