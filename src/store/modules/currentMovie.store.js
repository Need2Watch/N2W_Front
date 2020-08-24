const state = {
  currentMovie: {},
};

const actions = {
  loadMovie({ commit }, payload) {
    commit('LOAD_MOVIE', payload);
  },
  followMovie({ commit }) {
    commit('FOLLOW_MOVIES');
  },
  watchMovie({ commit }) {
    commit('WATCH_MOVIES');
  },
};

const mutations = {
  LOAD_MOVIE(state, payload) {
    this.state.currentMovie = payload;
  },
  FOLLOW_MOVIES(state) {
    this.state.currentMovie.following = !state.currentMovie.following;
  },
  WATCH_MOVIES(state) {
    this.state.currentMovie.watched = !state.currentMovie.watched;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
