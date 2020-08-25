import { MoviesState, Movie } from '../interfaces/movies';

const state: MoviesState = {
  movies: [],
};

const actions = {
  loadMovies(context: any, payload: Array<Movie>) {
    context.commit('LOAD_MOVIES', payload);
  },
};

const getters = {
  movies(): MoviesState {
    return state;
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
  getters,
};
