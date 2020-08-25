import { MoviesState } from '../interfaces/movies';

const state: MoviesState = {
  movies: [],
};

const actions = {
  loadMovies(context: any, payload: any) {
    context.commit('LOAD_MOVIES', payload);
  },
};

const getters = {
  movies(state: MoviesState): MoviesState {
    return state;
  },
};

const mutations = {
  LOAD_MOVIES(state: MoviesState, payload: any) {
    this.state.movies = payload;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
  getters,
};
