import { CurrentMovieState, Movie } from '../interfaces/movies';

const state: CurrentMovieState = {
  following: false,
  genres: [],
  movie_id: 0,
  overview: '',
  poster_url: '',
  rating: 0,
  title: '',
  watched: false,
};

const actions = {
  loadMovie(context: any, payload: Movie) {
    context.commit('LOAD_MOVIE', payload);
  },
  followMovie(context: any) {
    context.commit('FOLLOW_MOVIES');
  },
  watchMovie(context: any) {
    context.commit('WATCH_MOVIES');
  },
};

const getters = {
  currentMovie(): CurrentMovieState {
    return state;
  },
};

const mutations = {
  LOAD_MOVIE(state: CurrentMovieState, payload: Movie) {
    state.following = payload.following;
    state.genres = payload.genres;
    state.movie_id = payload.movie_id;
    state.overview = payload.overview;
    state.poster_url = payload.poster_url;
    state.rating = payload.rating;
    state.title = payload.title;
    state.watched = payload.watched;
  },

  FOLLOW_MOVIES(state: Movie) {
    state.following = !state.following;
  },
  WATCH_MOVIES(state: Movie) {
    state.watched = !state.watched;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
  getters,
};
