import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import loggedUser from './modules/loggedUser';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    loggedUser,
  },
  state: {
    movies: [],
    currentMovie: {},
    scheduledEvents: {},
  },
  getters: {},
  mutations: {
    loadMovies(state, payload) {
      state.movies = payload;
    },
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
  actions: {},
  plugins: [vuexLocal.plugin],
});
