import { Movie, MoviesState } from '../types';

const state = {
  movies: [],
};

const actions = {
  loadMovies({ commit }: any, payload: Array<Movie>) {
    commit('LOAD_MOVIES', payload);
  },
};

const mutations = {
  LOAD_MOVIES(state: MoviesState, payload: Array<Movie>) {
    state.movies = payload;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
