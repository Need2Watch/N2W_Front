<template>
  <n2w-movie-card></n2w-movie-card>
</template>
<script lang="ts">
import axios from 'axios';
import N2wMovieCard from '../components/moviesView/N2wMovieCard.vue';
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  components: {
    N2wMovieCard,
  },
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser/loggedUser',
      movie: 'currentMovie/currentMovie',
    }),
    starCount() {
      let movie = this.$store.getters['currentMovie/currentMovie'];
      return movie.rating.split(',');
    },
    ratingIsOdd() {
      let movie = this.$store.getters['currentMovie/currentMovie'];
      if (movie.rating % 2 != 0) return true;
      return false;
    },
  },
})
export default class Movie extends Vue {
  followMovie() {
    const previousThis = this;
    axios
      .post('http://127.0.0.1:5000/movies/follow', {
        user_id: previousThis.$store.state.loggedUser.userId,
        movie_id: previousThis.$store.getters.currentMovie.movie_id,
      })
      .then(function () {
        previousThis.$store.commit('followMovie');
      });
  }
  watchMovie() {
    const previousThis = this;
    axios
      .post('http://127.0.0.1:5000/movies/watch', {
        user_id: previousThis.$store.state.loggedUser.userId,
        movie_id: previousThis.$store.state.movie.movie_id,
      })
      .then(function () {
        previousThis.$store.commit('watchMovie');
      });
  }
  unfollowMovie() {
    const previousThis = this;
    axios
      .post('http://127.0.0.1:5000/movies/unfollow', {
        user_id: previousThis.$store.state.loggedUser.userId,
        movie_id: previousThis.$store.state.movie_id,
      })
      .then(function () {
        previousThis.$store.commit('followMovie');
      });
  }
  unwatchMovie() {
    const previousThis = this;
    axios
      .post('http://127.0.0.1:5000/movies/unwatch', {
        user_id: previousThis.$store.state.loggedUser.userId,
        movie_id: previousThis.$store.state.movie.movie_id,
      })
      .then(function () {
        previousThis.$store.commit('watchMovie');
      });
  }
}
</script>