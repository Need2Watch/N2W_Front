<template>
  <v-card color="secondary" class="pt-10" height="100%">
    <n2w-movie-card></n2w-movie-card>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import N2wMovieCard from '../components/moviesView/N2wMovieCard';

export default {
  name: 'Movie',
  props: {},
  components: { N2wMovieCard },
  data() {
    return {};
  },
  computed: mapState({
    movie: (state) => state.currentMovie,
    loggedUser: (state) => state.loggedUser,
    starCount: function () {
      let starCountArray = this.movie.rating.split(',');
      return starCountArray;
    },
    ratingIsOdd: function () {
      if (this.movie.rating % 2 != 0) return true;
      return false;
    },
  }),
  methods: {
    followMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/follow', {
          user_id: previousThis.loggedUser.userId,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function () {
          previousThis.$store.commit('followMovie');
        });
    },
    watchMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/watch', {
          user_id: previousThis.loggedUser.userId,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function () {
          previousThis.$store.commit('watchMovie');
        });
    },
    unfollowMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/unfollow', {
          user_id: previousThis.loggedUser.userId,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function () {
          previousThis.$store.commit('followMovie');
        });
    },
    unwatchMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/unwatch', {
          user_id: previousThis.loggedUser.userId,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function () {
          previousThis.$store.commit('watchMovie');
        });
    },
  },
};
</script>