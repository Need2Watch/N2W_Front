import { CurrentMovieState, Movie } from '../types';

const state = {
  currentMovie: {},
};

const actions = {
  loadMovie({ commit }: any, payload: Object) {
    commit('LOAD_MOVIE', payload);
  },
  followMovie({ commit }: any) {
    commit('FOLLOW_MOVIES');
  },
  watchMovie({ commit }: any) {
    commit('WATCH_MOVIES');
  },
};

const getters = {
  currentMovie(state: CurrentMovieState) {
    return state.currentMovie;
  },
};

const mutations = {
  LOAD_MOVIE(state: CurrentMovieState, payload: Movie) {
    state.currentMovie = payload;
  },
  FOLLOW_MOVIES(state: CurrentMovieState) {
    state.currentMovie.following = !state.currentMovie.following;
  },
  WATCH_MOVIES(state: CurrentMovieState) {
    state.currentMovie.watched = !state.currentMovie.watched;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
  getters,
};
