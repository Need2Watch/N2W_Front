<template>
  <v-card color="secondary" class="pt-10" height="100%">
    <n2w-movie-card></n2w-movie-card>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import N2wMovieCard from '../components/N2wMovieCard';

export default {
  name: 'Movie',
  props: {},
  components: { N2wMovieCard },
  data() {
    return {
      movie: {
        color: '#1F7087',
        src:
          'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
        title: 'After',
        rating: '8.5',
        artist: 'Drama, Misterio',
      },
    };
  },
  computed: mapState({
    movie: state => state.currentMovie,
    loggedUser: state => state.loggedUser,
    starCount: function() {
      let starCountArray = this.movie.rating.split(',');
      return starCountArray;
    },
    ratingHasDecimal: function() {
      if (this.movie.rating % 1 != 0) return true;
      return false;
    },
  }),
  methods: {
    followMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/follow', {
          user_id: previousThis.loggedUser.user_id,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function() {
          previousThis.$store.commit('followMovie');
        });
    },
    watchMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/watch', {
          user_id: previousThis.loggedUser.user_id,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function() {
          previousThis.$store.commit('watchMovie');
        });
    },
    unfollowMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/unfollow', {
          user_id: previousThis.loggedUser.user_id,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function() {
          previousThis.$store.commit('followMovie');
        });
    },
    unwatchMovie() {
      const previousThis = this;
      axios
        .post('http://127.0.0.1:5000/movies/unwatch', {
          user_id: previousThis.loggedUser.user_id,
          movie_id: previousThis.movie.movie_id,
        })
        .then(function() {
          previousThis.$store.commit('watchMovie');
        });
    },
  },
};
</script>
<style scoped>
@import '../assets/styles/N2wMovieCard.css';
</style>
