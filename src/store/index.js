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
    currentMovie: {
      movie_id: '2',
      title: 'Dunkirk',
      poster_url:
        'https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SL1200_.jpg',
      genres: [{ name: 'War' }, { name: 'Drama' }],
      rating: '8',
      overview: 'A guy wears war',
      watched: true,
      following: false,
    },
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
