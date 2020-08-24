const state = {
  movies: '',
};

const actions = {
  loadMovies({ commit }, payload) {
    commit('LOAD_MOVIES', payload);
  },
};

const mutations = {
  LOAD_MOVIES(state, payload) {
    this.state.movies = payload;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
