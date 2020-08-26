import { MoviesState, Movie } from '../interfaces/movies';

const state: MoviesState = {
  movies: [
    {
      following: false,
      genres: [],
      movie_id: 0,
      overview: '',
      poster_url: '',
      rating: 0,
      title: '',
      watched: false,
    },
  ],
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
  LOAD_MOVIES(state: MoviesState, payload: Array<Movie>) {
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
