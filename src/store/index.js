import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    loggedUser: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      user_id: '',
      country: '',
      city: '',
      profilePicture: '',
    },
    movies: [],
    currentMovie: {},
    scheduledEvents: {},
  },
  getters: {},
  mutations: {
    loadUser(state, payload) {
      state.loggedUser.firstName = payload.first_name;
      state.loggedUser.lastName = payload.last_name;
      state.loggedUser.username = payload.username;
      state.loggedUser.email = payload.email;
      state.loggedUser.password = payload.password;
      state.loggedUser.user_id = payload.user_id;
      state.loggedUser.country = payload.country;
      state.loggedUser.city = payload.city;
      state.loggedUser.profilePicture = payload.profile_picture;
    },
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
    }
  },
  actions: {},
  plugins: [vuexLocal.plugin],
});
